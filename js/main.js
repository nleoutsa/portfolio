"use strict";


// VARIABLES
var stats = document.getElementById('stats');
var gallery = document.getElementById('gallery');

var zoomed_size = '96.5%';


var hidden_frames = [];
var current_category = [];
var zoomed_frame = gallery.childNodes[0];
var info_section;

var art_pieces = document.getElementsByClassName('art_piece');
var toggle_switches = document.getElementsByClassName('toggle');
var tag_buttons = document.getElementsByClassName('tag');
var about_buttons = document.getElementsByClassName('about');

var git_repos = [];
//////////////////////////////////////////
//         FUNCTION CALLS
//////////////////////////////////////////

project_data.forEach(function(piece) {
    if (piece.url)
        createFrame(piece);
});

// clicking my name should bring you to the 'starting gallery'
// 'starting gallery' is web dev stuff and about section.
// make about section a frame element fitting into gallery...
// you can use id to over specify frame styles...






//////////////////////////////////////////
//         FUNCTIONS
//////////////////////////////////////////


function createFrame (piece) {
    var frame = elmnt('div', 'frame');
    var art_piece = elmnt('div', 'art_piece');
    var aspect_force = elmnt('div', 'aspect_force');

    var thumbnail;

    // set data attributes so we can access them elsewhere...
    frame.dataset.ratio = piece.ratio || 1;
    frame.dataset.large_pic = 'http://res.cloudinary.com/maxwellmarlowe/image/upload' + piece.url;
    frame.dataset.small_pic = 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.4' + piece.url;
    frame.dataset.zoom = 'false';
    if (piece.github) {
        frame.dataset.github = piece.github || '';
    }

    frame.dataset.tags = piece.tags || '';

    frame.dataset.title = piece.title || '';
    frame.dataset.description = piece.description || '';
    frame.dataset.medium = piece.medium || '';
    frame.dataset.redirect = piece.redirect || '';
    frame.dataset.date = piece.date || '';
    frame.dataset.languages = {'error': 'Waiting for Github API to respond'};


    var all_bytes = 0;
    if (piece.github) {
        ajaxCall('https://api.github.com/', 'repos/' + piece.github + '/languages', frame);
        git_repos.push(frame);
    }

    if (piece.custom_crop)
        thumbnail = 'url(http://res.cloudinary.com/maxwellmarlowe/image/upload/' + piece.custom_crop + piece.url + ')';
    else if (piece.tags.match(/portraiture/)) {
        thumbnail = 'url(http://res.cloudinary.com/maxwellmarlowe/image/upload/ar_1,c_crop,dpr_2.0,fl_progressive,g_face,w_0.4' + piece.url + ')';
    }
    else
        thumbnail = 'url(http://res.cloudinary.com/maxwellmarlowe/image/upload/ar_1,c_crop,dpr_4.0,g_center,w_400' + piece.url + ')';

    art_piece.style.background = thumbnail;
    art_piece.style.backgroundSize = 'cover';

    frame.appendChild(aspect_force);
    frame.appendChild(art_piece);

    gallery.appendChild(frame);
    current_category.push(frame);
}

function createInfoSection(node) {
    var info = elmnt('div', 'info');

    var title = elmnt('p', 'title');
    title.innerHTML = node.dataset.title;

    var description = elmnt('p', 'description');
    description.innerHTML = node.dataset.description;

    var medium = elmnt('p', 'medium');
    medium.innerHTML = node.dataset.medium;

    if (node.dataset.redirect) {
        var link_p = elmnt('p', 'link_p');
        var redirect = elmnt('a', 'redirect');
        redirect.innerHTML = "View Project";
        redirect.href = node.dataset.redirect;
        redirect.target = '_blank';
        link_p.appendChild(redirect);
    }

    if (node.dataset.github) {
        var link_github = elmnt('p', 'link_github');
        var github = elmnt('a', 'github');
        github.innerHTML = "View Code";
        github.href = 'https://github.com/' + node.dataset.github;
        github.target = '_blank';
        link_github.appendChild(github);

        var github_languages = elmnt('p', 'github_languages');
        var languages = JSON.parse(node.dataset.languages);
        var keys = Object.keys(languages);

        var total_bytes = 0;
        for (var i = 0; i < keys.length; i++) {
            total_bytes += languages[keys[i]];
        }

        for (var i = 0; i < keys.length; i++) {
            var number_of_bytes = languages[keys[i]];

            var language_div = elmnt('div', 'language_div');

            var language_key = elmnt('span', keys[i]);
            language_key.innerHTML = keys[i] + ': ';
            language_key.style.opacity = "1";


            var language_data = elmnt('span', 'language_data');
            language_data.dataset.bytes = number_of_bytes + ' bytes';
            language_data.dataset.percent = (100 * (number_of_bytes / total_bytes)).toFixed(2) + '%';

            if (keys[i] == "CoffeeScript")
                language_data.style.color = "#aaa";
            else
                language_data.style.color = "#333";

            language_data.innerHTML = (100 * (number_of_bytes / total_bytes)).toFixed(2) + '%';

            language_data.addEventListener('click', function(event) {switchLanguageDataFormat(event);});

            language_data.style.backgroundColor = language_colors[keys[i]];
            language_data.style.width = (80 * (number_of_bytes / total_bytes)).toFixed(2) + '%';

            language_div.appendChild(language_key);
            language_div.appendChild(language_data);
            github_languages.appendChild(language_div);
        }

    }

    var date = elmnt('p', 'date');
    date.innerHTML = node.dataset.date;

    info.appendChild(title);
    info.appendChild(medium);
    info.appendChild(description);
    info.appendChild(date);

    if (github_languages)
        info.appendChild(github_languages);

    if (link_p)
        info.appendChild(link_p);

    if (link_github)
        info.appendChild(link_github);

    return info;
}


function zoom(node) {

    var ratio = node.dataset.ratio;

    if (getWindowWidth().x > 600) {
        node.childNodes[1].style.background = 'url(' + node.dataset.large_pic + ')';

        setTimeout(function() {
            info_section = createInfoSection(node);
            gallery.insertBefore(info_section, node);
            setTimeout(function() {
                info_section.style.maxHeight = '30em';

                // scroll to top of info section
                function step(timestamp) {
                  var scroll_amount = (info_section.offsetTop) - gallery.scrollTop;
                  gallery.scrollTop += (scroll_amount / 15);
                  if (info_section) {
                      if (gallery.scrollTop < (info_section.offsetTop - 20) || gallery.scrollTop > (info_section.offsetTop)) {
                        requestAnimationFrame(step);
                      }
                  }
                }
                requestAnimationFrame(step);

            }, 10);
        }, 500);

    }
    else {
        node.childNodes[1].style.background = 'url(' + node.dataset.small_pic + ')';

        info_section = createInfoSection(node);
        gallery.insertBefore(info_section, node);
    }

    node.childNodes[1].style.backgroundSize = 'cover';
    node.childNodes[0].style.paddingTop = ratio * 100 + '%';
    node.style.width = zoomed_size;

    node.dataset.zoom = 'true';
}

function unzoom(node) {

    info_section = null;
    node.childNodes[0].style.paddingTop = '';
    // set width to empty string so it will be whatever is set in css...
    node.style.width = '';

    node.dataset.zoom = 'false';
}



//////////////////////////////////////////
//         EVENT LISTENERS
//////////////////////////////////////////

// add event listeners to art_pieces
for (var i = 0; i < art_pieces.length; i++) {
    art_pieces[i].addEventListener('click', function(event) {click_artpiece(event);}, false);
    if (getWindowWidth().x > 600) {
        art_pieces[i].addEventListener('mouseover', function(event) {mouseover_artpiece(event);}, false);
        art_pieces[i].addEventListener('mouseout', function(event) {mouseout_artpiece(event);}, false);
    }
}

// add event listeners to toggle_switches
for (var i = 0; i < toggle_switches.length; i++) {
    toggle_switches[i].addEventListener('click', function(event) {toggleCategory(event);}, false);
}

// add event listeners to tag buttons
for (var i = 0; i < tag_buttons.length; i++) {
    tag_buttons[i].addEventListener('click', function(event) {showCategory(event);}, false);
}

// add event listeners to about buttons
for (var i = 0; i < about_buttons.length; i++) {
    about_buttons[i].addEventListener('click', function(event) {showAboutSection(event);}, false);
}

function click_artpiece (event) {

    if (info_section) {
        gallery.removeChild(info_section);
    }

    // get index of picture in currently visible images array
    var index = current_category.indexOf(event.target.parentNode);

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

        if (zoomed_frame)
            unzoom(zoomed_frame);

        zoomed_frame = event.target.parentNode;

        hidden_frames = [];

        if (index % minimize_number() > 0) {
            for (var i = (index % minimize_number()); i > 0; i--) {
                var frame = current_category[index - i];

                if (frame.nodeType == 1) {
                    frame.style.width = '0';
                    frame.style.margin = '0';
                    hidden_frames.push(frame);
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

function mouseover_artpiece (event) {
    for (var i = 0; i < gallery.childNodes.length; i++) {
        if (    gallery.childNodes[i].nodeType == 1
            &&  gallery.childNodes[i] != event.target.parentNode
            &&  gallery.childNodes[i].className != 'info') {
            gallery.childNodes[i].childNodes[1].style.opacity = '0.35';
        }
        else {
           gallery.childNodes[i].childNodes[1].style.opacity = '';
        }
    }
}

function mouseout_artpiece (event) {
    for (var i = 0; i < gallery.childNodes.length; i++) {
        if (gallery.childNodes[i].nodeType == 1) {
            gallery.childNodes[i].childNodes[1].style.opacity = '';
        }
    }
}

function toggleCategory (event) {

    var tag = event.target.dataset.tag;

    if (tag == 'art_categories' || tag == 'painting_categories') {
        var max_height = tag == 'art_categories' ? '17em' : '9em';

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
    }
}

function showCategory (event) {

    // highlight selected section, unhighlight all others
    for (var i = 0; i < tag_buttons.length; i++) {
        tag_buttons[i].dataset.selected = 'false';
    }
    for (var i = 0; i < about_buttons.length; i++) {
        about_buttons[i].dataset.selected = 'false';
    }
    event.target.dataset.selected = 'true';


    gallery.style.height = '';
    gallery.style.paddingTop = '';

    for (var i = 0; i < gallery.parentNode.childNodes.length; i++) {
        child = gallery.parentNode.childNodes[i];
        if (child.nodeType == 1) {
            if (child != gallery) {
                child.style.maxHeight = '0';
            }
            else
                child.style.maxHeight = '100%';
        }
    }

    if (info_section) {
        gallery.removeChild(info_section);
        info_section = null;
    }
    if (zoomed_frame) {
        unzoom(zoomed_frame);
    }

    current_category = [];

    zoomed_frame = null;

    var tag = event.target.dataset.tag;

    for (var i = 0; i < gallery.childNodes.length; i++) {

        var child = gallery.childNodes[i];

        if (child.dataset.tags.match(new RegExp(tag)) == null) {
            child.style.width = 0;
            child.style.margin = 0;
        }
        else {
            child.style.width = '';
            child.style.margin = '';
            current_category.push(child);
        }
    }
}

function showAboutSection (event) {

    // highlight selected section, unhighlight all others
    for (var i = 0; i < tag_buttons.length; i++) {
        tag_buttons[i].dataset.selected = 'false';
    }
    for (var i = 0; i < about_buttons.length; i++) {
        about_buttons[i].dataset.selected = 'false';
    }
    event.target.dataset.selected = 'true';


    if (info_section) {
        gallery.removeChild(info_section);
        info_section = null;
    }
    if (zoomed_frame) {
        unzoom(zoomed_frame);
    }

    current_category = [];

    zoomed_frame = null;

    var tag = event.target.dataset.tag;

    // hide frames
    for (var i = 0; i < gallery.childNodes.length; i++) {
        var child = gallery.childNodes[i];
        child.style.width = 0;
        child.style.margin = 0;
    }

    for (var i = 0; i < gallery.parentNode.childNodes.length; i++) {
        var child = gallery.parentNode.childNodes[i];

        if (child.nodeType == 1) {
            if (child.tagName == 'DIV' && child.dataset.tag == tag) {
                child.style.maxHeight = '100%';
                child.style.height = '';
                child.style.paddingTop = '';
            }
            else {
                child.style.maxHeight = 0;
                child.style.height = 0;
                child.style.paddingTop = 0;
            }
        }
    }

    var languages_breakdown = document.getElementById('languages_breakdown');

    if (event.target.dataset.tag == 'skills' && languages_breakdown.innerHTML == '') {
        generateLanguageDataVisual();
    }
}


function generateLanguageDataVisual () {
    var total_bytes = 0;
    var all_repos_languages = {};

    for (var i = 0; i < git_repos.length; i++) {

        var languages = JSON.parse(git_repos[i].dataset.languages);
        var keys = Object.keys(languages);

        for (var j = 0; j < keys.length; j++) {
            total_bytes += languages[keys[j]];

            if (all_repos_languages[keys[j]])
                all_repos_languages[keys[j]] += languages[keys[j]];
            else
                all_repos_languages[keys[j]] = languages[keys[j]];
        }
    }

    var language_names = Object.keys(all_repos_languages);

    // remove coffeescript
    language_names.splice(language_names.indexOf('CoffeeScript'), 1);

    var center = new Vector(gallery.parentNode.clientWidth / 2, gallery.parentNode.clientHeight / 2);
    var angle_deg = 0;

    for (var i = 0; i < language_names.length; i++) {

        angle_deg += (360 / language_names.length);

        var language =  new languageObject( language_names[i],
                            all_repos_languages[language_names[i]],
                            (100 * ((all_repos_languages[language_names[i]]) / total_bytes))
                        );

        var skill_div = elmnt('div', 'skill_div');
        var skill_lang = elmnt('span', language.lang);
        var skill_data = elmnt('span', 'skill_data');

        skill_lang.innerHTML = language.lang + '';
        skill_data.innerHTML = language.lang_percent + '%';

        // ISSUE, wait for values to be returned by ajax!!!!!!!!!
        // animate
        if (getWindowWidth().x > 900)
            animateLanguage(skill_div, skill_data, skill_lang, center, language_names, language, angle_deg);

        skill_div.appendChild(skill_lang);
        skill_data.addEventListener('click', function(event) {switchLanguageDataFormat(event);});
        skill_div.appendChild(skill_data);
        languages_breakdown.appendChild(skill_div);
    }
}

function languageObject(lang, lang_bytes, lang_percent) {
    this.lang = lang;
    this.lang_bytes = lang_bytes;
    this.lang_percent = parseFloat(lang_percent, 10).toFixed(2)
}

function animateLanguage(skill_div, skill_data, skill_lang, center, language_names, language, angle_deg) {

    var cycle = 0;

    setVendorPrefixForTransformOrigin(skill_div, '-150px 0');

    var skill_div_width = language.lang_percent;

    skill_div.style.backgroundColor = language_colors[language.lang];

    function step(timestamp) {

        cycle += 10;

        if (cycle <= 360) { // do for duration

            requestAnimationFrame(step);
        }
        else if (cycle <= 720) { // do for duration
            requestAnimationFrame(step);
        }
        else if (cycle <= 1080) { // do for duration
            setVendorPrefixForTransform(languages_breakdown, 'rotate(' + (cycle - 720) + 'deg)');
            setVendorPrefixForTransform(skill_div, 'rotate(' + (1.01 * (cycle - 720)) + 'deg)');
            // setVendorPrefixForTransform(skill_div, 'rotate(' + (cycle - 720) + 'deg)');

            requestAnimationFrame(step);
        }
        else if (cycle <= 1440) {
            skill_div.style.position = 'relative';

            requestAnimationFrame(step);
        }
        else if (cycle <= 1600) {
            skill_div.style.borderRadius = 0;
            requestAnimationFrame(step);
        }
        else if (cycle <= 1800) {
            requestAnimationFrame(step);
        }
        else { // do on stop
            skill_lang.style.opacity = '1';
            skill_data.style.opacity = '1';
            skill_div.style.width = skill_div_width + '%';
        }
    }
    requestAnimationFrame(step);
}

function switchLanguageDataFormat(event) {
    if (event.target.innerHTML.match(new RegExp('%')))
        event.target.innerHTML = event.target.dataset.bytes;
    else
        event.target.innerHTML = event.target.dataset.percent;
}
//////////////////////////////////////////
//         HELPER FUNCTIONS
//////////////////////////////////////////

function setVendorPrefixForTransform (node, value) {
    node.style.webkitTransform = value;
    node.style.MozTransform = value;
    node.style.msTransform = value;
    node.style.OTransform = value;
    node.style.transform = value;
}
function setVendorPrefixForTransformOrigin (node, value) {
    node.style.webkitTransformOrigin = value;
    node.style.MozTransformOrigin = value;
    node.style.msTransformOrigin = value;
    node.style.OTransformOrigin = value;
    node.style.transformOrigin = value;
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

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

function ajaxCall(api, command, node) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
            if(xmlhttp.status == 200){
                node.dataset.languages = xmlhttp.responseText;
            }
            else if(xmlhttp.status == 400) {
              console.log('There was an error 400');
            }
            else {
               console.log('something else other than 200 was returned');
            }
        }
    }

    xmlhttp.open("GET", api + command, true);
    xmlhttp.send();
}
