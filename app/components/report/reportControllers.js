app.directive("reports", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './app/components/report/reportView.html'
  }
});
app.controller("reportController", function($scope) {
  $scope.month = {
    "weeks": [
      {
        "week1": [
          {
            "day": 'day1'
          },
          {
            "day": 'day2'
          },
          {
            "day": 'day3'
          },
          {
            "day": 'day4'
          },
          {
            "day": 'day5'
          },
          {
            "day": 'day6'
          },
          {
            "day": 'day7'
          }
        ]
      },
      {
        "week2": [
          {
            "day": 'day1'
          },
          {
            "day": 'day2'
          },
          {
            "day": 'day3'
          },
          {
            "day": 'day4'
          },
          {
            "day": 'day5'
          },
          {
            "day": 'day6'
          },
          {
            "day": 'day7'
          }
        ]
      },
      {
        "week3": [
          {
            "day": 'day1'
          },
          {
            "day": 'day2'
          },
          {
            "day": 'day3'
          },
          {
            "day": 'day4'
          },
          {
            "day": 'day5'
          },
          {
            "day": 'day6'
          },
          {
            "day": 'day7'
          }
        ]
      },
      {
        "week4": [
          {
            "day": 'day1'
          },
          {
            "day": 'day2'
          },
          {
            "day": 'day3'
          },
          {
            "day": 'day4'
          },
          {
            "day": 'day5'
          },
          {
            "day": 'day6'
          },
          {
            "day": 'day7'
          }
        ]
      },
      {
        "week5": [
          {
            "day": 'day1'
          },
          {
            "day": 'day2'
          },
          {
            "day": 'day3'
          },
          {
            "day": 'day4'
          },
          {
            "day": 'day5'
          },
          {
            "day": 'day6'
          },
          {
            "day": 'day7'
          }
        ]
      }
    ]
  }
});
app.directive("reportsTwo", function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: './app/components/report/reportViewTwo.html'
  }
});
app.controller("reportControllerTwo", function($scope) {
  angular.element(document).ready( function() {
    var hdata = {
      labels: ["16:47", "17:47", "18:47", "19:47", "20:47"],
      datasets: [
        {
          label: "Employee #1",
          backgroundColor: "rgba(172,194,132,0.1)",
          borderColor: "#ACC26D",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#9DB86D",
          data: [66, 77, 108, 85, 75]
        },
        {
          label: "Employee #2",
          backgroundColor: "rgba(225,236,244,0.1)",
          borderColor: "#2451f4",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#a1a9b0",
          data: [50, 55, 70, 65, 60]
        },
        {
          label: "Employee #3",
          backgroundColor: "rgba(234,204,181,0.1)",
          borderColor: "#f48024",
          pointBackgroundColor: "#fff",
          pointBorderColor: "#b45b15",
          data: [80, 85, 100, 60, 65]
        }
      ] 
    };
    var adata = {
      labels: [
        "At Risk",
        "Normal",
        "Caution"
      ],
      datasets: [
        {
            data: [30, 50, 20],
            backgroundColor: [
                "#FF0000",
                "#23781b",
                "#f9ee02"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#217619",
                "#e5db00"
            ]
        }]
    }
    var bdata = {
      labels: ["Data 1", "Data 2", "Data 3", "Data 4"],
      datasets: [
        {
          data: [
            11, 16, 7, 3, 14
          ],
          backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
          ],
          label: "Dataset"
        }
      ]
    };
    var cdata = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };
    var ddata = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 40],
        }
      ]
    };
    var heartrate = document.getElementById('heartrate').getContext('2d');
    var chart = new Chart(heartrate, {
      type: 'line',
      data: hdata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    var atrisk = document.getElementById('atrisk').getContext('2d');
    var doughnut = new Chart(atrisk, {
      type: 'doughnut',
      data: adata,
      options: {
        reponsive: true,
        maintainAspectRatio: false
      }
    });
    var dataset = document.getElementById('dataset').getContext('2d');
    var polar = new Chart(dataset, {
      type: 'polarArea',
      data: bdata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
    var datasetTwo = document.getElementById('dataset-two');
    var radar = new Chart(datasetTwo, {
      type: 'radar',
      data: cdata,
      options: {
        reponsive: true,
        maintainAspectRatio: false
      }
    });
    var datasetThree = document.getElementById('dataset-three');
    var bar = new Chart(datasetThree, {
      type: 'bar',
      data: ddata,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  });
});