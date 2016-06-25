function navClicked() {
  var sidebar = angular.element($('#sidebar')).scope();
  if ($('#sidebar').hasClass('open')) {
    sidebar.slideOut();
  } else {
    sidebar.slideIn();
  }
}
function slideUp(element) {
  var currHeight = element.height();
  var noHeight = 0;
  element.height(currHeight).animate({
    'height': noHeight
  }, 500, function() {
    element.css({
      'display': 'none'
    });
  });
}
function slideDown(element) {
  var startHeight = 0;
  var autoHeight = element.css({
    'display': 'block',
    'height': 'auto'
  }).height();
  element.height(startHeight).animate({
    'height': autoHeight,
    'display': 'block'
  }, 750);
}