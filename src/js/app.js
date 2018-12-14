// Required libraries
const $ = require('jquery');
require('popper.js');
require('bootstrap/dist/js/bootstrap.bundle.min');
require('bootstrap/dist/css/bootstrap.min.css');

// My Css files
require('../css/style.css');
require('../css/nav.css');
require('../css/landing.css');
require('../css/button.css');
require('../css/skills.css');

const logos = ['javascript', 'nodejs', 'python', 'mysql', 'mongodb', 'html5', 'css3', 'react'];

$('document').ready(() => {
  // Add event listeners to navigation buttons
  // return false to stop page from refreshing
  $('#brand').click(function() { return false; });
  $('#pageLink1').click(function() { return false; });
  $('#pageLink2').click(function() { return false; });
  $('#pageLink3').click(function() { return false; });
  $('#pageLink4').click(function() { return false; });
  $('#landingBtn').click(function() { });

  // Load SVG files
  logos.forEach(logo => {
    $(`#${logo}Logo`).attr('src', require(`../imgs/logos/${logo}.svg`));
  });
});