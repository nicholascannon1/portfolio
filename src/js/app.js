// Required libraries
const $ = require('jquery');
require('popper.js');
require('bootstrap/dist/js/bootstrap.bundle.min');
require('bootstrap/dist/css/bootstrap.min.css');
const fullpage = require('fullpage.js');

// My Css files
require('../css/style.css');
require('../css/nav.css');
require('../css/landing.css');
require('../css/button.css');
require('../css/skills.css');

/**
 * FullPage.js set up
 */
const fullpage_api = new fullpage('#fullpage', {
  autoScrolling: true,
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  onLeave: function(origin, destination, direction) {
    if (origin.index == 0 && direction == 'down') {
      // Leaving landing page so show navbar
      $('nav').removeClass('hideNav').addClass('showNav');
    } else if (destination.index == 0) {
      // Entering landing so remove navbar
      $('nav').removeClass('showNav').addClass('hideNav');
    }
    
    // Update navlink highlighting
    $('#pageLink' + origin.index).removeClass('active');
    $('#pageLink' + destination.index).addClass('active');
  }
});

$('document').ready(() => {
  // Add event listeners to navigation buttons
  // return false to stop page from refreshing
  $('#brand').click(function() { fullpage_api.moveTo(1); return false; });
  $('#pageLink1').click(function() { fullpage_api.moveTo(2); return false; });
  $('#pageLink2').click(function() { fullpage_api.moveTo(3); return false; });
  $('#pageLink3').click(function() { fullpage_api.moveTo(4); return false; });
  $('#pageLink4').click(function() { fullpage_api.moveTo(5); return false; });
  $('#landingBtn').click(function() { fullpage_api.moveTo(3); });
});