function navClicked() {
  var sidebar = angular.element($('#sidebar')).scope();
  if ($('#sidebar').hasClass('open')) {
    sidebar.slideOut();
  } else {
    sidebar.slideIn();
  }
}