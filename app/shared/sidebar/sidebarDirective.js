app.directive("sidebar", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './app/shared/sidebar/sidebarView.html'
  }
});