const ctx = document.getElementById('myChart').getContext('2d');


var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(255, 206, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(255, 159, 64, 0.2)'
            // ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


const begin = (start, end) => {

    let api = 'https://api.coindesk.com/v1/bpi/historical/close.json'
    if (start && end) {
        api = `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
    }

    return axios
      .get(api)
      .then(response => {
        const keys = Object.keys(response.data.bpi);
        const values = Object.values(response.data.bpi);


        drawChart(keys, values);

      });
  };


let start = document.querySelector('#start')
let end = document.querySelector('#end')


