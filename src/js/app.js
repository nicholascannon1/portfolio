// Required libraries
const $ = require('jquery');
require('popper.js');
require('bootstrap/dist/js/bootstrap.bundle.min');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/js/dist/util')
require('bootstrap/js/dist/scrollspy');

// My Css files
require('../css/style.css');
require('../css/nav.css');
require('../css/landing.css');
require('../css/button.css');
require('../css/skills.css');

const logos = ['javascript', 'nodejs', 'python', 'mysql', 'mongodb', 'html5', 'css3', 'react'];

/**
 * Detects if an element is currently in the viewport
 */
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

function navClick(id) {
  // Scroll the element into the viewport
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth', block: 'start'
  });

  /*
  // Highlight nav-link in navbar
  $('#'+id+'Link').addClass('active');
  */
}

$('document').ready(() => {
  //$('body').scrollspy({target: ".navbar"})

  // Add event listeners to navigation buttons
  // return false to stop page from refreshing
  $('#landingLink').click(function() { navClick('landing'); return false; });
  $('#aboutLink').click(function() { navClick('about'); return false; });
  $('#projectsLink').click(function() { navClick('projects'); return false; });
  $('#skillsLink').click(function() { navClick('skills'); return false; });
  $('#contactLink').click(function() { navClick('contact'); return false; });
  $('#landingBtn').click(function() { navClick('projects'); return false;});

  /**
   * Window resize and scroll function. This function is used to 
   * remove the navbar on the landing screen.
   */
  $(window).on('resize scroll', function() {
    if ($('#landing').isInViewport()) {
      $('nav').removeClass('showNav').addClass('hideNav');
    } else {
      $('nav').addClass('showNav').removeClass('hideNav');
    }
  });

  /*
  // Load SVG files
  logos.forEach(logo => {
    $(`#${logo}Logo`).attr('src', require(`../imgs/logos/${logo}.svg`));
  });
  */
});