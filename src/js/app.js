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
require('../css/footer.css');
require('../css/about.css');
require('../css/projects.css');
require('../css/contact.css');

const logos = ['javascript', 'nodejs', 'python', 'mysql', 'mongodb', 'html5', 'css3', 'react'];

/**
 * Detects if an element is currently in the viewport
 */
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight() - 80; // Offset it by 80px
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

/**
 * Navbar button event function
 */
function navClick(id) {
  // Scroll the element into the viewport
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth', block: 'start'
  });
}

/**
 * Checks if the landing section is in the viewport and
 * determines if the navbar should be shown or not.
 */
function checkNav() {
  if ($('#landing').isInViewport()) {
    $('nav').removeClass('showNav').addClass('hideNav');
  } else {
    $('nav').addClass('showNav').removeClass('hideNav');
  }
}

$('document').ready(() => {
  checkNav();

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
  $(window).on('resize scroll', checkNav);

  // Load image files
  $('#profilePic').attr('src', require('../imgs/profilePic.jpg'));
  $('#portfolioScreenshot').attr('src', require('../imgs/projects/portfolio.png'));
  $('#singlePhotosScreenshot').attr('src', require('../imgs/projects/indev.png'));
  $('#melloScreenshot').attr('src', require('../imgs/projects/indev.png'));

  // Load SVG files
  logos.forEach(logo => {
    $(`#${logo}Logo`).attr('src', require(`../imgs/logos/${logo}.svg`));
  });
});