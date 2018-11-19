const $ = require('jquery');
require('popper.js');
require('bootstrap/dist/js/bootstrap.bundle.min');
require('bootstrap/dist/css/bootstrap.min.css');
require('../css/style.css');
require('../css/nav.css');
const fullpage = require('fullpage.js');

/**
 * FullPage.js set up
 */
const fullpage_api = new fullpage('#fullpage', {
  autoScrolling: true,
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  onLeave: function(origin, destination, direction) {
    if (destination.index == 1) {
      // Leaving landing page so show navbar
      $('nav').removeClass('hideNav').addClass('showNav');
    } else if (destination.index == 0) {
      // Entering landing so remove navbar
      $('nav').removeClass('showNav').addClass('hideNav');
    }

    // Update nablink highlighting
    $('#pageLink' + origin.index).removeClass('currentPage');
    $('#pageLink' + destination.index).addClass('currentPage');
  }
});

$('document').ready(() => {
  // Add event listeners to navigation buttons
  $('#brand').click(function() { fullpage_api.moveTo(1); });
  $('#pageLink1').click(function() { fullpage_api.moveTo(2); });
  $('#pageLink2').click(function() { fullpage_api.moveTo(3); });
  $('#pageLink3').click(function() { fullpage_api.moveTo(4); });
  $('#pageLink4').click(function() { fullpage_api.moveTo(5); });
});