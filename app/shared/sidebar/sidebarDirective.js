app.directive("sidebar", function() {
  return {
//     scope: {},
    transclude: true, 
    restrict: 'E',
    replace: true,
    templateUrl: './app/shared/sidebar/sidebarView.html',
    controller: ['$scope', function($scope) {
      $scope.sidebar = $('#sidebar');
      $scope.test = function() {
        console.log('testing. . .');
      }
      $scope.slideOut = function() {
        var wrapper = $('#wrapper');
        wrapper.animate({
          'left': '0'
        }, 1000);
        $scope.sidebar.animate({
          'left': '-250px'
        }, 1000);
        $scope.sidebar.removeClass('open');
      };
      $scope.slideIn = function() {
        var wrapper = $('#wrapper');
        wrapper.animate({
          'left': '250px'
        }, 1000);
        $scope.sidebar.animate({
          'left': '0'
        }, 1000);
        $scope.sidebar.addClass('open');
      }
    }],
    controllerAs: 'sidebarCtrl'
  }
});