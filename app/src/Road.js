/**
 * Copyright (c) 2014 Gloey Apps
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @author: Hein Rutjes (IjzerenHein)
 * @license MIT
 * @copyright Gloey Apps, 2014
 */

/*global define*/

/**
 * @module
 */
define(function(require, exports, module) {
    'use strict';

    // import dependencies
    var Modifier = require('famous/core/Modifier');
    var Transitionable = require('famous/transitions/Transitionable');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var View = require('famous/core/View');

    /**
     * AppView
     * @class
     * @extends View
     * @param {Object} [options] Configuration options
     */
    function Stars() {
        View.apply(this, arguments);

        var i;
        this.transitionable = new Transitionable(0);
        this.transitionable.set(10000000, {duration: 5000000});
        this._roadMarkers = [];
        for (i = 0; i < 10; i++) {
            this._roadMarkers.push(_createRoadMarker.call(this));
        }
    }
    Stars.prototype = Object.create(View.prototype);
    Stars.prototype.constructor = Stars;

    Stars.DEFAULT_OPTIONS = {
    };

    /**
     * Create the road marker
     */
    function _createRoadMarker() {
        var offset = this._roadMarkers.length * 1000;
        var surface = new Surface({
            size: [10, 300],
            classes: ['road', 'backfaceVisibility']
        });
        var modifier = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            transform: function() {
                var val = ((this.transitionable.get() % 6000) - 4000) + offset;
                if (val > 2000) {
                    val -= 6000;
                }
                return Transform.multiply(Transform.rotateX((Math.PI / 180) * 89), Transform.translate(0, val));
            }.bind(this),
            opacity: function() {
                var val = ((this.transitionable.get() % 6000) - 4000) + offset;
                if (val > 2000) {
                    val -= 6000;
                }
                var opacity = (val + 4000) / 6000;
                return opacity;
            }.bind(this)
        });
        var item = {
            surface: surface,
            modifier: modifier
        };
        this.add(modifier).add(surface);
        return item;
    }

    module.exports = Stars;
});
