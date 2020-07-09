import { Line } from "vue-chartjs";

export default {
  extends: Line,
 
  data() {
    return {
        chartData : {
            labels: [
              "January",
              "February",
              "March",
              "April",
            ],
            datasets: [
                {
                label: "Température réelle",
                borderColor: "#f39e00",
                pointBackgroundColor: "#f39e00",
                pointBorderColor: "#f39e00",
                borderWidth: 3,
                backgroundColor: "#f39e005f",
                data: [23, 20, 25, 31, 20, 22, 23]
              }

              // ,{
              //   label: "Température ressentie",
              //   borderColor: "#706bff",
              //   pointBackgroundColor: "#706bff",
              //   borderWidth: 3,
              //   pointBorderColor: "#706bff",
              //   backgroundColor: "#706bff6a",
              //   data: [23.90, 20, 25.56, 31, 20, 22, 23]
              // }
              
            ]
          },
          options: {
            responsive: true, 
            maintainAspectRatio: false, 
            scales: {    
              //L'axe y
                yAxes: [{
                    gridLines : {
                        display: true   
                    },
                    // les pas
                    ticks: {
                        beginAtZero: false,
                        max: 45,
                        min: 10,
                        stepSize: 0.5
                    }
                  
                }],
              //l'axe x
                xAxes: [{
                    gridLines : {
                        display: true
                    },
                }]
            },
            animation: {
                duration: 1000, // general animation time
            },
            hover: {
                animationDuration: 500 // duration of animations when hovering an item
            },
            responsiveAnimationDuration: 500, // animation duration after a resize
            tooltips : {
                xPadding : 20,
                yPadding : 20,
                cornerRadius: 15,
            },
            legend : {
                position : 'bottom',
                align: 'center'
            }
          }
          
    };
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}