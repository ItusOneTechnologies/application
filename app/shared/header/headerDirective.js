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
        var offset = $($event.currentTarget).offset();
        var li = $('.report-nav-li');
        var center = li.width()/2;
        if ($('.pointer').hasClass('open')) {
          $scope.closePointer();
        } else {
          $scope.openPointer(offset, center);
        }
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