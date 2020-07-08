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
              "May",
              "June",
              "July"
            ],
            datasets: [
                {
                label: "Températures",
                borderColor: "#f39e00",
                pointBackgroundColor: "#f39e00",
                pointBorderColor: "#f39e00",
                borderWidth: 1,
                backgroundColor: "#f39e005f",
                data: [60, 55, 32, 10, 2, 12, 53]
              },
              {
                label: "Humidité",
                borderColor: "#706bff",
                pointBackgroundColor: "#706bff",
                borderWidth: 1,
                pointBorderColor: "#706bff",
                backgroundColor: "#706bff6a",
                data: [40, 39, 10, 40, 39, 80, 40]
              }
              
            ]
          },
          options : { responsive: true, maintainAspectRatio: false }
    };
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}