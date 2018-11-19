const bootstrap = require('bootstrap/dist/css/bootstrap.css');
const style = require('../css/style.css');
const fullpage = require('fullpage.js');

new fullpage('#fullpage', {
  autoScrolling: true,
  scrollHorizontally: true
});
