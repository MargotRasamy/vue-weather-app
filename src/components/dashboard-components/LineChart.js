import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [ reactiveProp ],
  data() {
    return {
      options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
              //L'axe y
              yAxes: [{
                  gridLines: {
                      display: true
                  },
                  // les pas
                  ticks: {
                      beginAtZero: true,
                      max: 40,
                      min: 0,
                      stepSize: 1
                  }
              }],
              //l'axe x
              xAxes: [{
                  gridLines: {
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
          tooltips: {
              xPadding: 20,
              yPadding: 20,
              cornerRadius: 15,
          },
          legend: {
              position: 'bottom',
              align: 'center'
          },
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}



