app.directive("appHeader", function () {
  return {
    templateUrl: './app/shared/header/headerView.html',
    replace: true,
    restrict: 'E',
    controller: function ($scope) {
      $scope.sidebarClick = function () {
        navClicked();
      };
    }
  }
});