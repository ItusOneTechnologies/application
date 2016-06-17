app.directive("reports", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './app/components/report/reportView.html'
  }
});
app.controller("reportController", function($scope) {
//   angular.element(document).ready( function() {
//     var hdata = {
//       labels: ["16:47", "17:47", "18:47", "19:47", "20:47"],
//       datasets: [
//         {
//           label: "Employee #1",
//           backgroundColor: "rgba(172,194,132,0.1)",
//           borderColor: "#ACC26D",
//           pointBackgroundColor: "#fff",
//           pointBorderColor: "#9DB86D",
//           data: [66, 77, 108, 85, 75]
//         },
//         {
//           label: "Employee #2",
//           backgroundColor: "rgba(225,236,244,0.1)",
//           borderColor: "#2451f4",
//           pointBackgroundColor: "#fff",
//           pointBorderColor: "#a1a9b0",
//           data: [50, 55, 70, 65, 60]
//         },
//         {
//           label: "Employee #3",
//           backgroundColor: "rgba(234,204,181,0.1)",
//           borderColor: "#f48024",
//           pointBackgroundColor: "#fff",
//           pointBorderColor: "#b45b15",
//           data: [80, 85, 100, 60, 65]
//         }
//       ] 
//     };
//     var adata = {
//       labels: [
//         "At Risk",
//         "Normal",
//         "Caution"
//       ],
//       datasets: [
//         {
//             data: [30, 50, 20],
//             backgroundColor: [
//                 "#FF0000",
//                 "#23781b",
//                 "#f9ee02"
//             ],
//             hoverBackgroundColor: [
//                 "#FF6384",
//                 "#217619",
//                 "#e5db00"
//             ]
//         }]
//     }
//     var heartrate = document.getElementById('heartrate').getContext('2d');
//     var chart = new Chart(heartrate, {
//       type: 'line',
//       data: hdata,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });
//     var atrisk = document.getElementById('atrisk').getContext('2d');
//     var doughnut = new Chart(atrisk, {
//       type: 'doughnut',
//       data: adata
//     });
//   });
});