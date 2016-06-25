app.directive("appHeader", function () {
  return {
    templateUrl: './app/shared/header/headerView.html',
    replace: true,
    restrict: 'E',
    controller: function ($scope) {
      $scope.sidebarClick = function () {
        navClicked();
      };
      $scope.reportNavClick = function($event) {
        console.log($event.currentTarget);
      };
      $scope.openPointer = function(offset, center) {
        var pointer = $('.pointer');
        pointer.css({
          'display': 'block',
          'left': offset.left + center
        });
        pointer.addClass('open');
      };
      $scope.closePointer = function() {
        var pointer = $('.pointer');
        pointer.css({
          'display': 'none'
        });
        pointer.removeClass('open');
      } 
    }
  }
});