app.directive("reports", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './app/components/report/reportView.html'
  }
});
app.controller("reportController", function($scope) {
  angular.element(document).ready( function() {
    console.log('this text worked');
    var hdata = {
      labels: ["16:47", "17:47", "18:47", "19:47", "20:47"],
      datasets: [
        {
          label: "Heartrate by the Hour",
          backgroundColor: "rgba(172,194,132,0.4)",
          strokeColor: "#ACC26D",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#9DB86D",
          data: [66, 77, 108, 85, 75]
        }
      ] 
    }
    var heartrate = document.getElementById('heartrate').getContext('2d');
    var chart = new Chart(heartrate, {
      type: 'line',
      data: hdata
    });
  });
});