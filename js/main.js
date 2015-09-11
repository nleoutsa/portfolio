"use strict";


// VARIABLES
var stats = document.getElementById('stats');
var gallery = document.getElementById('gallery');

var zoomed_size = '96.5%';


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
    var frame = elmnt('a', 'frame');
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

var event_type = window.mobilecheck ? 'touchstart' : 'click';

addEventListener(event_type, function(event) {

    console.log(event);
    alert(event.target.className + ", " + event.type);

    if (event.target.className == 'art_piece') {
        // get index of picture in gallery
        var index = getIndex(event.target.parentNode)

        var minimize_number = function () {
            if (getWindowWidth().x > 900)
                return 4;
            else if (getWindowWidth().x > 600)
                return 3;
            else
                return 2;
        }

        // zoom
        if (event.target.parentNode.dataset.zoom == 'false') {

            unzoom(zoomed_frame);

            zoomed_frame = gallery.childNodes[index];

            hidden_frames = [];

            if (index % minimize_number() > 0) {
                for (var i = (index % minimize_number()); i > 0; i--) {
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

// return true if mobile browser, false otherwise
window.mobilecheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}
