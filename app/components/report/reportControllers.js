app.directive("report", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './app/components/report/reportView.html'
  }
});
app.controller("reportController", function($scope) {
  
})