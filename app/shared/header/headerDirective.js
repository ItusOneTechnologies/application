app.directive("appHeader", function () {
  return {
    templateUrl: './app/shared/header/headerView.html',
    replace: true,
    restrict: 'E',
    controller: function ($scope) {
      $scope.previousNav;
      $scope.sidebarClick = function () {
        navClicked();
      };
      $scope.reportNavClick = function($event) {
        var dd = $(event.currentTarget).next();
        if ($(dd).hasClass('open-nav')) {
          $(dd).css('display', 'none');
          $(dd).removeClass('open-nav');
        } else {
          if ($scope.previousNav) {
            $scope.previousNav.css('display', 'none');
            $scope.previousNav.removeClass('open-nav');
          }
          var startHeight = 0;
          var autoHeight = $(dd).css({
            'display': 'block',
            'height': 'auto'
          }).height();
          $(dd).height(startHeight).animate({
            'height': autoHeight,
            'display': 'block'
          }, 750);
          $(dd).addClass('open-nav');
          $scope.previousNav = $(dd);
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