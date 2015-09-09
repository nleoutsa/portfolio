"use strict";


// DATA
var artwork = [
    {title: 'a', small_thumbnail: 'http://i.imgur.com/KuEXstZt.jpg', medium_thumbnail: 'http://i.imgur.com/KuEXstZm.jpg', large_pic: 'http://i.imgur.com/KuEXstZ.jpg'},
    {title: 'b', small_thumbnail: 'http://i.imgur.com/kfpjNWXt.png', medium_thumbnail: 'http://i.imgur.com/kfpjNWXm.png', large_pic: 'http://i.imgur.com/kfpjNWX.png'},
    {title: 'c', small_thumbnail: 'http://i.imgur.com/fm3ww0et.jpg', medium_thumbnail: 'http://i.imgur.com/fm3ww0em.jpg', large_pic: 'http://i.imgur.com/fm3ww0e.jpg'},
    {title: 'aa', small_thumbnail: 'http://i.imgur.com/J0pmOlVt.jpg', medium_thumbnail: 'http://i.imgur.com/J0pmOlVm.jpg', large_pic: 'http://i.imgur.com/J0pmOlV.jpg'},
    {title: 'bb', small_thumbnail: 'http://i.imgur.com/qBKO2GSt.jpg', medium_thumbnail: 'http://i.imgur.com/qBKO2GSm.jpg', large_pic: 'http://i.imgur.com/qBKO2GS.jpg'},
    {title: 'cc', small_thumbnail: 'http://i.imgur.com/WdR9k3Zt.jpg', medium_thumbnail: 'http://i.imgur.com/WdR9k3Zm.jpg', large_pic: 'http://i.imgur.com/WdR9k3Z.jpg'},
    {title: 'a', small_thumbnail: 'http://i.imgur.com/KuEXstZt.jpg', medium_thumbnail: 'http://i.imgur.com/KuEXstZm.jpg', large_pic: 'http://i.imgur.com/KuEXstZ.jpg'},
    {title: 'b', small_thumbnail: 'http://i.imgur.com/kfpjNWXt.png', medium_thumbnail: 'http://i.imgur.com/kfpjNWXm.png', large_pic: 'http://i.imgur.com/kfpjNWX.png'},
    {title: 'c', small_thumbnail: 'http://i.imgur.com/fm3ww0et.jpg', medium_thumbnail: 'http://i.imgur.com/fm3ww0em.jpg', large_pic: 'http://i.imgur.com/fm3ww0e.jpg'},
    {title: 'aa', small_thumbnail: 'http://i.imgur.com/J0pmOlVt.jpg', medium_thumbnail: 'http://i.imgur.com/J0pmOlVm.jpg', large_pic: 'http://i.imgur.com/J0pmOlV.jpg'},
    {title: 'bb', small_thumbnail: 'http://i.imgur.com/qBKO2GSt.jpg', medium_thumbnail: 'http://i.imgur.com/qBKO2GSm.jpg', large_pic: 'http://i.imgur.com/qBKO2GS.jpg'},
    {title: 'cc', small_thumbnail: 'http://i.imgur.com/WdR9k3Zt.jpg', medium_thumbnail: 'http://i.imgur.com/WdR9k3Zm.jpg', large_pic: 'http://i.imgur.com/WdR9k3Z.jpg'}
];


// VARIABLES
var stats = document.getElementById('stats');
var gallery = document.getElementById('gallery');

var row_width = setRowSize(getWindowWidth().x);

var zoomed_size;
var enlarged_size;
var normal_size;
var smaller_size;


//////////////////////////////////////////
//         FUNCTION CALLS
//////////////////////////////////////////

window.onload = function(event) {

    var num_rows = setRowSize(getWindowWidth().x);
    changeFrameSizes(num_rows)

    artwork.forEach(function(piece) {
        createFrame(piece);
    });
}

// resize
window.onresize = function(event) {
    var num_rows = setRowSize(event.target.outerWidth);

    changeFrameSizes(num_rows)

}




//////////////////////////////////////////
//         FUNCTIONS
//////////////////////////////////////////

function getWindowWidth () {
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];
    var width = w.innerWidth || e.clientWidth || g.clientWidth;
    var height = w.innerHeight|| e.clientHeight|| g.clientHeight;
    return {x: width, y: height};
}


function setRowSize (width) {
    if (width > 1000) {
        return 4;
    }
    else if (width > 600) {
        return 3;
    }
    else return 2;

}

function changeFrameSizes (num_rows) {

    if (num_rows == 4) {
        zoomed_size = '95%';
        enlarged_size = '25%';
        normal_size = '22%';
        smaller_size = '21%';
    }
    else if (num_rows == 3) {
        zoomed_size = '95%';
        enlarged_size = '33%';
        normal_size = '30%';
        smaller_size = '29%';
    }
    else if (num_rows == 2) {

        zoomed_size = '95%';
        enlarged_size = '48.5%';
        normal_size = '47%';
        smaller_size = '45%';
    }

    // for (var i = 0; i < gallery.childNodes.length; i++) {
    //     var child = gallery.childNodes[i];

    //     child.style.width = normal_size;
    //     child.style.marginBottom = "0";
    //     child.style.marginLeft = "2.5%";
    //     child.style.marginTop = "2.5%";
    // }

}

function createFrame (piece) {
    var frame = elt('div', 'frame');
    var art_piece = elt('div', 'art_piece');
    var aspect_force = elt('div', 'aspect_force');

    // frame.style.width = normal_size;

    // set data attributes so we can access them elsewhere...
    art_piece.dataset.large_pic = piece.large_pic;
    art_piece.dataset.medium_thumbnail = piece.medium_thumbnail;
    art_piece.dataset.image_url = piece.small_thumbnail;
    art_piece.dataset.zoom = 'false';

    art_piece.style.background = 'url(' + piece.medium_thumbnail + ')';
    art_piece.style.backgroundSize = 'cover';

    frame.appendChild(aspect_force);
    frame.appendChild(art_piece);

    gallery.appendChild(frame);
}

function zoom(node) {

    var ratio = getImageRatio(node.childNodes[1].dataset.image_url);

    node.childNodes[1].style.background = 'url(' + node.childNodes[1].dataset.large_pic; + ')';
    node.childNodes[1].style.backgroundSize = 'cover';
    node.childNodes[0].style.paddingTop = ratio * 100 + '%';
    node.style.width = zoomed_size;
}

function unzoom(node) {
    node.childNodes[0].style.paddingTop = '100%';

    node.style.width = normal_size;
}




//////////////////////////////////////////
//         EVENT LISTENERS
//////////////////////////////////////////

// addEventListener('mouseover', function(event) {
//     if (event.target.className == 'art_piece') {

//         event.target.style.opacity = 1;

//         if (event.target.dataset.zoom == 'false') {
//             event.target.parentNode.style.width = enlarged_size;
//         }



//         // get index of picture in gallery
//         var index = getIndex(event.target.parentNode)

//         var this_row = Math.floor(index / row_width);


//         for (var i = 0; i < gallery.childNodes.length; i++) {
//             var child = gallery.childNodes[i];
//             if (child != event.target.parentNode && (this_row == Math.floor(i / row_width))) {
//                 child.style.width = smaller_size;
//                 child.style.marginBottom = "2%";

//             }
//         }

//     }
// });
// addEventListener('mouseout', function(event) {
//     if (event.target.className == 'art_piece') {

//         // get index of picture in gallery
//         var index = getIndex(event.target.parentNode)

//         event.target.parentNode.childNodes[0].style.paddingTop = '100%';

//         event.target.dataset.zoom = 'false';

//         for (var i = 0; i < gallery.childNodes.length; i++) {
//             var child = gallery.childNodes[i];

//             child.style.width = normal_size;
//             child.style.marginBottom = "0";
//             child.style.marginLeft = "2.5%";
//             child.style.marginTop = "2.5%";
//         }
//     }
// });


addEventListener('click', function(event) {
    if (event.target.className == 'art_piece') {

        // get index of picture in gallery
        var index = getIndex(event.target.parentNode)

        // zoom
        if (event.target.dataset.zoom == 'false') {

            zoom(event.target.parentNode);

            event.target.dataset.zoom = 'true';
        }
        // reset positioning
        else if (event.target.dataset.zoom == 'true') {

            unzoom(event.target.parentNode);

            event.target.dataset.zoom = 'false';
        }
    }
});






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
function elt(type, className) {
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

