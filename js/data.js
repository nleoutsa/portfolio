"use strict";

var project_data = [
    {
        'name'          : 'violin',
        'url'           : '/v1441829010/violin.jpg',
        'ratio'         : 0.7487,
        'title'         : 'Violin',
        'description'   : 'A fun little experimental vanilla JavaScript platform game with a night-day system and player shadow.',
        'medium'        : 'JavaScript, HTML5, CSS3',
        'redirect'      : 'http://violin.netlify.com/',
        'github'        : 'nleoutsa/violin',
        'date'          : 'September 2015',
        'tags'          : 'web'
    },
    {
        'url'           : '/v1441829009/electronic_life.jpg',
        'name'          : 'electronic_LIFE',
        'ratio'         : 0.6275,
        'title'         : 'electronic LIFE',
        'description'   : 'A vanilla JavaScript simulation pitting herbivores, carnivores, and plants against eachother in a game of natural selection. Who will win? Watch populations grow and fall! Witness herds thrive! Mourn the extinction of entire species!',
        'medium'        : 'JavaScript, HTML5, CSS3',
        'redirect'      : 'https://electronic-life.bitballoon.com',
        'github'        : 'nleoutsa/electronicLIFE',
        'date'          : 'August 2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'arbitrage_ed',
        'url'           : '/v1441829009/arbitrage_lesson.jpg',
        'secondary_url' : '/v1441829009/arbitrage_landing.jpg',
        'ratio'         : 0.6854,
        'title'         : 'Arbitrage Ed',
        'description'   : 'Arbitrage Ed aims to improve financial literacy through relevant lessons. Short videos let you learn new concepts in minutes, targeted problem sets allow you to test your comprehension, and research tools let you apply what you\'ve learned to real-world data.',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, AngularJS, Node.js, MongoDB, Express.js',
        'redirect'      : 'http://www.arbitrageed.com',
        'github'        : 'nleoutsa/arbitrageEdPublic',
        'date'          : 'March - August 2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'my_old_portfolio',
        'url'           : '/v1441829010/portfolio_screenshot.jpg',
        'ratio'         : 0.64,
        'title'         : 'My old portfolio',
        'description'   : 'The last iteration of my portfolio site. A lot of fun to make, but I like to switch things up.',
        'medium'        : 'AngularJS, JavaScript, JQuery, HTML5, CSS3, node.js',
        'redirect'      : 'http://maxwellmarlowe.herokuapp.com/',
        'github'        : 'nleoutsa/maxwellmarlowe',
        'date'          : '2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'workable',
        'url'           : '/v1441827304/workable.jpg',
        'ratio'         : 0.6863,
        'title'         : 'Workable\'s Offer Letter Generator',
        'description'   : 'Workable\'s Offer Letter Generator allows you to quickly create a professional offer letter to send to prospective employees.',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, Ruby, Rails, PostgreSQL',
        'redirect'      : 'https://workable-app.herokuapp.com/',
        'github'        : 'nleoutsa/workable_app',
        'date'          : 'February - April 2015',
        'tags'          : 'web'
    },
    {
        'url'           : '/v1441829009/cities.jpg',
        'name'          : 'cities',
        'ratio'         : 0.72549,
        'title'         : 'Cities',
        'description'   : 'A pixelated JavaScript drawing game! Choose your colors, create a palette, hold the mouse down and move it around and see what you can create! My drawings always look like cities :)',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3',
        'redirect'      : 'https://cities.bitballoon.com',
        'github'        : 'nleoutsa/cities',
        'date'          : '2014',
        'tags'          : 'web'
    },
    {
        'name'          : 'simpletext',
        'url'           : '/v1441829010/simple_text.jpg',
        'ratio'         : 0.72549,
        'title'         : 'SimpleText',
        'description'   : 'Send a text message to anyone using SimpleText! A test project and great learning experience using the Twilio API, Datamapper, Sinatra, Heroku, and PostgreSQL.',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, Twilio, Sinatra, Ruby, Datamapper, PostgreSQL',
        'github'        : 'nleoutsa/simpleText',
        'redirect'      : 'https://morning-retreat-6114.herokuapp.com/',
        'date'          : '2014',
        'tags'          : 'web'
    },
    {
        'url'           : '/v1441829009/breeze_thru.jpg',
        'name'          : 'breezethru',
        'ratio'         : 0.64928,
        'title'         : 'BreezeThru',
        'description'   : 'The product of a 4 hour idea hack thrown by IdeaLabs\' Tom Hughes. This is a very basic demo depicting the main functions of BreezeThru -a reservation and event planning app that factors in travel and wait times when finding the right venue for your night on town!',
        'medium'        : 'JavaScript, JQuery, HTML5, CSS3, Ruby, Rails',
        'redirect'      : 'https://breezethru.herokuapp.com/',
        'date'          : 'March 2015',
        'tags'          : 'web'
    },
    {
        'name'          : 'horse',
        'url'           : '/v1441830951/horse.jpg',
        'ratio'         : 0.74,
        'title'         : 'Horse on Western Massachusetts Farm',
        'description'   : 'Palette Knife Painting, 9\" X 12\"',
        'medium'        : 'Acrylic on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, acrylic'
    },
    {
        'name'          : 'self_portrait_sweatshirt',
        'url'           : '/v1441829010/self_portrait_green.jpg',
        'ratio'         : 1.5,
        'title'         : 'Self Portrait in Green',
        'description'   : '24\" X 36\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'stare',
        'url'           : '/v1441828273/stare.jpg',
        'ratio'         : 0.545,
        'title'         : 'Stare',
        'medium'        : 'Digital Painting, Wacom Tablet, Photoshop',
        'date'          : '2014',
        'custom_crop'   : 'ar_1,c_crop,dpr_3.0,g_east,h_400,w_400',
        'tags'          : 'art, painting, digital, photoshop, portraiture'
    },
    {
        'name'          : 'woman_reclining',
        'url'           : '/v1441829010/reclining_woman.jpg',
        'ratio'         : 0.65,
        'title'         : 'Woman Reclining',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'ladyagnew',
        'url'           : '/v1441830951/lady_agnew.jpg',
        'ratio'         : 1.25316,
        'title'         : 'Lady Agnew of Lochnaw',
        'description'   : 'After John Singer Sargent',
        'medium'        : 'Digital Painting, Ipad, Nomad Brush Stylus, Procreate 2',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, ipad, portraiture'
    },
    {
        'name'          : 'emma_sneakers',
        'url'           : '/v1441829009/emma_sitting.jpg',
        'ratio'         : 0.75,
        'title'         : 'Emma Sitting',
        'medium'        : 'Digital Painting, Wacom Tablet, Photoshop',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, photoshop, portraiture'
    },
    {
        'name'          : 'elephants',
        'url'           : '/v1441829009/elephants.jpg',
        'ratio'         : 0.45,
        'title'         : 'Elephants',
        'medium'        : 'Digital Painting, Wacom Tablet, Photoshop',
        'date'          : '2014',
        'custom_crop'   : 'ar_1,c_crop,dpr_4.0,g_custom,w_400,x_1900',
        'tags'          : 'art, painting, digital, photoshop'
    },
    {
        'name'          : 'track',
        'url'           : '/v1441829011/track.jpg',
        'ratio'         : 0.7,
        'title'         : 'Track',
        'medium'        : 'Digital Painting, Ipad, Nomad Brush Stylus, Procreate 2',
        'date'          : '2014',
        'tags'          : 'art, painting, digital, ipad, portraiture'
    },
    {
        'name'          : 'emma',
        'url'           : '/v1441829010/emma.jpg',
        'ratio'         : 1.19,
        'title'         : 'Emma',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'self_portrait_horse',
        'url'           : '/v1441829010/self_portrait_horse.jpg',
        'ratio'         : 1.25,
        'title'         : 'Self Portrait',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'dream_catcher_earrings',
        'url'           : '/v1441829009/earring.jpg',
        'ratio'         : 1.27,
        'title'         : 'Dream Catcher Earrings',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'sailor',
        'url'           : '/v1441829010/sailor.jpg',
        'ratio'         : 0.8,
        'title'         : 'Sailor',
        'description'   : '18\" X 24\"',
        'medium'        : 'Oil on Canvas',
        'date'          : '2014',
        'tags'          : 'art, painting, oil, portraiture'
    },
    {
        'name'          : 'lizard',
        'url'           : '/v1441830620/lizardsquare.jpg',
        'ratio'         : '25% 20%',
        'title'         : 'Lizard',
        'medium'        : '3D Model, Maya, Mudbox',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'coins',
        'url'           : '/v1441830620/coins_square.jpg',
        'ratio'         : '12% 80%',
        'title'         : 'Coins on Table',
        'medium'        : '3D Model, Maya, Mudbox',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'keyboard',
        'url'           : '/v1441830620/keyboard_square.jpg',
        'ratio'         : '90% 80%',
        'title'         : 'Keyboard, Monitor, and Computer',
        'medium'        : '3D Model, Maya, Mudbox',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'wooden_room',
        'url'           : '/v1441830620/wooden_room.jpg',
        'ratio'         : '100% 80%',
        'title'         : 'Wood Room',
        'medium'        : '3D Model, Maya',
        'date'          : '2014',
        'tags'          : 'art, 3D'
    },
    {
        'name'          : 'table',
        'url'           : '/v1441827303/table.jpg',
        'secondary_url' : '/v1441829011/table_closeup.jpg',
        'ratio'         : '35% 30%',
        'title'         : 'Table',
        'medium'        : 'Maple, Mahogony, Oak',
        'date'          : '2013',
        'tags'          : 'art, woodwork'
    },
    {
        'name'          : 'guitar',
        'url'           : '/v1441829010/guitar.jpg',
        'secondary_url' : '/v1441829010/guitar_body.jpg',
        'ratio'         : '30% 60%',
        'title'         : 'Guitar',
        'medium'        : 'Maple, Mahogony, Spruce, Dominos, Steel',
        'date'          : '2013',
        'tags'          : 'art, woodwork'
    }
];


var about_data = {
    'skills': [
        {
            'skill'     : 'HTML5',
            'rating'    : 85
        },
        {
            'skill'     : 'CSS3',
            'rating'    : 85
        },
        {
            'skill'     : 'JavaScript',
            'rating'    : 85
        },
        {
            'skill'     : 'AngularJS',
            'rating'    : 85
        },
        {
            'skill'     : 'Node.js',
            'rating'    : 85
        },
        {
            'skill'     : 'JQuery',
            'rating'    : 85
        },
        {
            'skill'     : 'Design',
            'rating'    : 85
        }
    ]
};