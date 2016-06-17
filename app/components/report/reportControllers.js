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
          label: "Employee #1",
          backgroundColor: "rgba(172,194,132,0.0)",
          borderColor: "#ACC26D",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#9DB86D",
          data: [66, 77, 108, 85, 75]
        },
        {
          label: "Employee #2",
          backgroundColor: "rgba(225,236,244,0.0)",
          borderColor: "#2451f4",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#a1a9b0",
          data: [50, 55, 70, 65, 60]
        },
        {
          label: "Employee #3",
          backgroundColor: "rgba(234,204,181,0.0)",
          borderColor: "#f48024",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#b45b15",
          data: [80, 85, 100, 60, 65]
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