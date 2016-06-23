function navClicked() {
  var sidebar = $('#sidebar');
  console.log('nav-clicked');
  if (sidebar.hasClass('open')) {
    slideOutNav(sidebar);
  } else {
    slideInNav(sidebar);
  }
}
function slideInNav(sidebar) {
  var wrapper = $('#wrapper');
  console.log(sidebar);
  wrapper.animate({
    'left': '200px'
  }, 1000);
  sidebar.animate({
    'left': '0'
  }, 1000);
  sidebar.addClass('open');
}
function slideOutNav(sidebar) {
  var wrapper = $('#wrapper');
  wrapper.animate({
    'left': '0'
  }, 1000);
  sidebar.animate({
    'left': '-200px'
  }, 1000);
  sidebar.removeClass('open');
}