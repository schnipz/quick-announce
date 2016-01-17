/**!
 * quick-announce -
 * @version {{ pkgVersion }}
 * Copyright (c) 2016 Mike Parsons
 * @license MIT
 */
(function(element) {
  'use strict';

  /* global define */
  /* global module */

  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD.
      define(factory);
    } else if (typeof exports === 'object') {
      // CommonJs/Node.
      module.exports = factory();
    } else {
      // Browser globals.
      root.returnExports = factory();
    }
  }(this, function() {

    function init() {}

    var quickAnnounce = {
      init: init
    };

    return quickAnnounce;

  }));

})(document.body);
