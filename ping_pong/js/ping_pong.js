// Generated by CoffeeScript 1.7.1
$(function() {
  var i, num, _i;
  num = prompt('Please enter a number.');
  while ($.isNumeric(num) === false) {
    num = prompt('You did not enter a number! Please enter a number.');
  }
  for (i = _i = 1; _i <= num; i = _i += 1) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      $('.list').append('<li>ping-pong</li>');
    } else if (i % 3 === 0) {
      $('.list').append('<li>ping</li>');
    } else if (i % 5 === 0) {
      $('.list').append('<li>pong</li>');
    } else {
      $('.list').append('<li>' + i + '</li>');
    }
  }
});
