"use strict";


// VARIABLES
var stats = document.getElementById('stats');
var gallery = document.getElementById('gallery');

var zoomed_size = '95%';


//////////////////////////////////////////
//         FUNCTION CALLS
//////////////////////////////////////////

project_data.forEach(function(piece) {
    if (piece.url)
        createFrame(piece);
});


//////////////////////////////////////////
//         FUNCTIONS
//////////////////////////////////////////


function createFrame (piece) {
    var frame = elmnt('div', 'frame');
    var art_piece = elmnt('div', 'art_piece');
    var aspect_force = elmnt('div', 'aspect_force');

    // set data attributes so we can access them elsewhere...

    frame.dataset.large_pic = 'http://res.cloudinary.com/maxwellmarlowe/image/upload' + piece.url;
    frame.dataset.zoom = 'false';

    if (piece.custom_crop)
            art_piece.style.background = 'url(http://res.cloudinary.com/maxwellmarlowe/image/upload/' + piece.custom_crop + piece.url + ')';
    else if (piece.tags.match(/portraiture/)) {
        art_piece.style.background = 'url(http://res.cloudinary.com/maxwellmarlowe/image/upload/ar_1,c_crop,dpr_2.0,fl_progressive,g_face,w_0.4' + piece.url + ')';
    }
    else
        art_piece.style.background = 'url(http://res.cloudinary.com/maxwellmarlowe/image/upload/ar_1,c_crop,dpr_4.0,g_center,w_400' + piece.url + ')';

    art_piece.style.backgroundSize = 'cover';

    frame.appendChild(aspect_force);
    frame.appendChild(art_piece);

    gallery.appendChild(frame);
}

function zoom(node) {

    var ratio = getImageRatio(node.dataset.large_pic);

    node.childNodes[1].style.background = 'url(' + node.dataset.large_pic; + ')';
    node.childNodes[1].style.backgroundSize = 'cover';
    node.childNodes[0].style.paddingTop = ratio * 100 + '%';
    node.style.width = zoomed_size;

    node.dataset.zoom = 'true';
}

function unzoom(node) {
    node.childNodes[0].style.paddingTop = '100%';
    // set width to empty string so it will be whatever is set in css...
    node.style.width = '';
    node.dataset.zoom = 'false';
}




//////////////////////////////////////////
//         EVENT LISTENERS
//////////////////////////////////////////

addEventListener('mouseover', function(event) {
    if (event.target.className == 'art_piece') {

        for (var i = 0; i < gallery.childNodes.length; i++) {
            if (gallery.childNodes[i].nodeType == 1 && gallery.childNodes[i] != event.target.parentNode) {
                gallery.childNodes[i].childNodes[1].style.opacity = '0.35';
            }
            else {
               gallery.childNodes[i].childNodes[1].style.opacity = '';
            }
        }
    }
});

addEventListener('mouseout', function(event) {
    if (event.target.className == 'art_piece') {

        for (var i = 0; i < gallery.childNodes.length; i++) {
            if (gallery.childNodes[i].nodeType == 1) {
                gallery.childNodes[i].childNodes[1].style.opacity = '';
            }
        }
    }
});

var hidden_frames = [];
var zoomed_frame = gallery.childNodes[0];

addEventListener('click', function(event) {
    if (event.target.className == 'art_piece') {
        // get index of picture in gallery
        var index = getIndex(event.target.parentNode)

        // zoom
        if (event.target.parentNode.dataset.zoom == 'false') {

            unzoom(zoomed_frame);

            zoomed_frame = gallery.childNodes[index];

            hidden_frames = [];

            if (index % 4 > 0) {
                for (var i = (index % 4); i > 0; i--) {
                    var frame = gallery.childNodes[index - i];
                    if (frame.nodeType == 1) {
                        frame.style.width = '0';
                        frame.style.margin = '0';
                        hidden_frames.unshift(frame);
                    }
                }
            }


            setTimeout(function() {
                hidden_frames.forEach(function(frame) {
                    frame.style.width = '';
                    frame.style.margin = '';
                    gallery.insertBefore(frame, zoomed_frame.nextSibling);
                });
            }, 600);

            zoom(event.target.parentNode);


        }
        // reset positioning
        else if (event.target.parentNode.dataset.zoom == 'true') {

            unzoom(event.target.parentNode);

            hidden_frames.forEach(function (frame) {

                frame.style.width = '0';
                frame.style.margin = '0';

                gallery.insertBefore(frame, event.target.parentNode);

                setTimeout(function() {
                    frame.style.width = '';
                    frame.style.margin = '';
                }, 10);

            });
        }
    }
    else if (event.target.className.match(/toggle/)) {
        toggleCategory(event.target);
    }
});


function toggleCategory(target) {

    var tag = target.dataset.tag;

    if (tag == 'art_categories' || 'painting_categories') {

        var max_height = tag == 'art_categories' ? '17em' : '10em';

        var category = document.getElementById(tag);

        var toggle = document.getElementById(tag + '_toggle');
        if (toggle.innerHTML == '+') {
            toggle.innerHTML = '-';
            category.style.maxHeight = max_height;
        }
        else if (toggle.innerHTML == '-') {
            toggle.innerHTML = '+';
            category.style.maxHeight = '0';
        }
        else return false;
    }
}



//////////////////////////////////////////
//         HELPER FUNCTIONS
//////////////////////////////////////////

function setVendorPrefix (node, property, value) {
    node.style["-webkit-" + property] = value;
    node.style["-moz-" + property] = value;
    node.style["-ms-" + property] = value;
    node.style["-o-" + property] = value;
}

// create element of type "type" with class "className"
function elmnt(type, className) {
    var element = document.createElement(type);
    element.setAttribute('class', className);
    return element;
}

function getIndex(node) {
    var i = 0;
    while (node = node.previousSibling) {
        if (node.nodeType === 1) { ++i }
    }
    return i;
}

function getImageRatio(url){
    // create img from url to grab original ratio
    var img = new Image();
    img.src = url;

    return img.height / img.width;
}

function getWindowWidth () {
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var width = w.innerWidth || e.clientWidth || g.clientWidth;
    var height = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x: width, y: height};
}

