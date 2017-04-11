var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The most BLAH creative minds in Art DAVE');

fill;
