/* globals define */
define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Road = require('./Road');

    // create the main context
    var mainContext = Engine.createContext();

    // Set main perspective
    mainContext.setPerspective(2000);

    // add road
    var road = new Road();
    mainContext.add(road);

    // add title
    var title = new Surface({
        content: 'This domain is reserved for<br><b>future projects</b><div class="subTitle">If you are interested in this domain, make a fair offer and let <a href="mailto:hrutjes@gmail.com">me</a> know what you intend to use it for.</div>',
        classes: ['title']
    });
    mainContext.add(title);
});
