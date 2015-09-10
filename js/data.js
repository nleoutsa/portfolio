"use strict";

var project_data = [
    {
        'name'          : 'violin',
        'url'           : '/v1441829010/violin.jpg',
        'pos'           : '55% 0%',
        'title'         : 'Violin',
        'description'   : 'A fun little experimental vanilla JavaScript platform game with a night-day system and player shadow.',
        'medium'        : 'JavaScript, HTML5, CSS3',
        'redirect'      : 'http://violin.netlify.com/',
        'date'          : '09 2015',
        'tags'          : 'web'
    },
    {
        'url'           : '/v1441829009/electronic_life.jpg',
        'name'          : 'electronic_LIFE',
        'pos'           : '70% 10%',
        'title'         : 'electronic LIFE',
        'description'   : 'A vanilla JavaScript simulation pitting herbivores, carnivores, and plants against eachother in a game of natural selection. Who will win? Watch populations grow and fall! Witness herds thrive! Mourn the extinction of entire species!',
        'medium'        : 'JavaScript, HTML5, CSS3',
        'redirect'      : 'https://electronic-life.bitballoon.com',
        'date'          : '2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'arbitrage_ed',
        'url'           : '/v1441829009/arbitrage_lesson.jpg',
        'secondary_url' : '/v1441829009/arbitrage_landing.jpg',
        'pos'           : '0% 0%',
        'title'         : 'Arbitrage Ed',
        'description'   : 'Arbitrage Ed aims to improve financial literacy through relevant lessons. Short videos let you learn new concepts in minutes, targeted problem sets allow you to test your comprehension, and research tools let you apply what you\'ve learned to real-world data.',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, AngularJS, Node.js, MongoDB, Express.js',
        'redirect'      : 'http://arbitrageed.com',
        'date'          : '2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'my_old_portfolio',
        'url'           : '/v1441829010/portfolio_screenshot.jpg',
        'pos'           : '50% 50%',
        'title'         : 'My old portfolio',
        'description'   : 'The last iteration of my portfolio site. A lot of fun to make, but I like to switch things up.',
        'medium'        : 'AngularJS, JavaScript, JQuery, HTML5, CSS3, node.js',
        'redirect'      : 'https://maxwellmarlowe.herokuapp.com/',
        'date'          : '2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'workable',
        'url'           : '/v1441827304/workable.jpg',
        'pos'           : '50% 80%',
        'title'         : 'Workable\'s Offer Letter Generator',
        'description'   : 'Workable\'s Offer Letter Generator allows you to quickly create a professional offer letter to send to prospective employees.',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, Ruby, Rails, PostgreSQL',
        'redirect'      : 'https://workable-app.herokuapp.com/',
        'date'          : '2015',
        'tags'          : 'web'
    },
    {
        'url'           : '/v1441829009/cities.jpg',
        'name'          : 'cities',
        'pos'           : '70% 10%',
        'title'         : 'Cities',
        'description'   : 'A pixelated JavaScript drawing game! Choose your colors, create a palette, hold the mouse down and move it around and see what you can create! My drawings always look like cities :)',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3',
        'redirect'      : 'https://cities.bitballoon.com',
        'date'          : '2014',
        'tags'          : 'web'
    },
    {
        'name'          : 'simpletext',
        'url'           : '/v1441829010/simple_text.jpg',
        'pos'           : '0% 90%',
        'title'         : 'SimpleText',
        'description'   : 'Send a text message to anyone using SimpleText! A test project and great learning experience using the Twilio API, Datamapper, Sinatra, Heroku, and PostgreSQL.',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, Twilio, ',
        'redirect'      : 'https://morning-retreat-6114.herokuapp.com/',
        'date'          : '2014',
        'tags'          : 'web'
    },
    {
        'url'           : '/v1441829009/breeze_thru.jpg',
        'name'          : 'breezethru',
        'pos'           : '50% 0%',
        'title'         : 'BreezeThru',
        'description'   : 'The product of a 4 hour idea hack thrown by IdeaLabs\' Tom Hughes. This is an unfinished demo depicting the main functions of BreezeThru -a reservation and event planning app that factors in travel and wait times when finding the right venue for your night on town!',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, Ruby, Rails',
        'redirect'      : 'https://breezethru.herokuapp.com/',
        'date'          : '2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'horse',
        'url'           : '/v1441830951/horse.jpg',
        'pos'           : '35% 50%',
        'title'         : 'Horse on Western Massachusetts Farm',
        'description'   : 'Palette Knife Painting, 9\" X 12\"',
        'medium'        : 'Acrylic on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, acrylic'
    },
    {
        'name'          : 'self_portrait_sweatshirt',
        'url'           : '/v1441829010/self_portrait_green.jpg',
        'pos'           : '60% 0%',
        'title'         : 'Self Portrait in Green',
        'description'   : '24\" X 36\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'stare',
        'url'           : '/v1441828273/stare.jpg',
        'pos'           : '72% 10%',
        'title'         : 'The Stare',
        'medium'        : 'Digital Painting, Wacom Tablet, Photoshop',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, photoshop, portraiture'
    },
    {
        'name'          : 'woman_reclining',
        'url'           : '/v1441829010/reclining_woman.jpg',
        'pos'           : '85% 50%',
        'title'         : 'Woman Reclining',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'ladyagnew',
        'url'           : '/v1441830951/lady_agnew.jpg',
        'pos'           : '50% 10%',
        'title'         : 'Lady Agnew of Lochnaw',
        'description'   : 'After John Singer Sargent',
        'medium'        : 'Digital Painting, Ipad, Nomad Brush Stylus, Procreate 2',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, ipad, portraiture'
    },
    {
        'name'          : 'emma_sneakers',
        'url'           : '/v1441829009/emma_sitting.jpg',
        'pos'           : '60% 80%',
        'title'         : 'Emma Sitting',
        'medium'        : 'Digital Painting, Wacom Tablet, Photoshop',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, photoshop, portraiture'
    },
    {
        'name'          : 'elephants',
        'url'           : '/v1441829009/elephants.jpg',
        'pos'           : '26% 40%',
        'title'         : 'Elephants',
        'medium'        : 'Digital Painting, Wacom Tablet, Photoshop',
        'date'          : '2014',
        'custom_crop'   : 'ar_1,c_crop,dpr_4.0,g_custom,w_400,x_1900',
        'tags'          : 'art, painting, digital, photoshop'
    },
    {
        'name'          : 'track',
        'url'           : '/v1441829011/track.jpg',
        'pos'           : '80% 20%',
        'title'         : 'Track',
        'medium'        : 'Digital Painting, Ipad, Nomad Brush Stylus, Procreate 2',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, ipad, portraiture'
    },
    {
        'name'          : 'emma',
        'url'           : '/v1441829010/emma.jpg',
        'pos'           : '35% 43%',
        'title'         : 'Emma',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'self_portrait_horse',
        'url'           : '/v1441829010/self_portrait_horse.jpg',
        'pos'           : '40% 100%',
        'title'         : 'Self Portrait',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'dream_catcher_earrings',
        'url'           : '/v1441829009/earring.jpg',
        'pos'           : '40% 65%',
        'title'         : 'Dream Catcher Earrings',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'sailor',
        'url'           : '/v1441829010/sailor.jpg',
        'pos'           : '70% 32%',
        'title'         : 'Sailor',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'lizard',
        'url'           : '/v1441830620/lizardsquare.jpg',
        'pos'           : '25% 20%',
        'title'         : 'Lizard',
        'medium'        : '3D Model, Maya, Mudbox',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'coins',
        'url'           : '/v1441830620/coins_square.jpg',
        'pos'           : '12% 80%',
        'title'         : 'Coins on Table',
        'medium'        : '3D Model, Maya, Mudbox',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'keyboard',
        'url'           : '/v1441830620/keyboard_square.jpg',
        'pos'           : '90% 80%',
        'title'         : 'Keyboard, Monitor, and Computer',
        'medium'        : '3D Model, Maya, Mudbox',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'wooden_room',
        'url'           : '/v1441830620/wooden_room.jpg',
        'pos'           : '100% 80%',
        'title'         : 'Wood Room',
        'medium'        : '3D Model, Maya',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'table',
        'url'           : '/v1441827303/table.jpg',
        'secondary_url' : '/v1441829011/table_closeup.jpg',
        'pos'           : '35% 30%',
        'title'         : 'Table',
        'medium'        : 'Maple, Mahogony, Oak',
        'date'          : '2013',
        'tags'          : 'art, woodwork'
    },
    {
        'name'          : 'guitar',
        'url'           : '/v1441829010/guitar.jpg',
        'secondary_url' : '/v1441829010/guitar_body.jpg',
        'pos'           : '30% 60%',
        'title'         : 'Guitar',
        'medium'        : 'Maple, Mahogony, Spruce, Dominos, Steel',
        'date'          : '2013',
        'tags'          : 'art, woodwork'
    }
];



// DATA
var artwork = [
    {title: 'a', small_thumbnail: 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.1/v1441821456/emma_sneakers_lboqnu.jpg', medium_thumbnail: 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.1/v1441821456/emma_sneakers_lboqnu.jpg', large_pic: 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.5/v1441821456/emma_sneakers_lboqnu.jpg'},
    {title: 'b', small_thumbnail: 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.1/v1441821456/horse_nm9kwo.jpg', medium_thumbnail: 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.1/v1441821456/horse_nm9kwo.jpg', large_pic: 'http://res.cloudinary.com/maxwellmarlowe/image/upload/w_0.5/v1441821456/horse_nm9kwo.jpg'},
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
