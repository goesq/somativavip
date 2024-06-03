var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Entrada por mês',
            data: [1000, 1300, 1600, 2100, 1800, 1500, 2500, 2600, 2690, 1950, 2300, 2900],
            backgroundColor: [
                'rgb(255, 241, 55)'

            ],
            borderColor: 'rgb(255, 185, 55)',

            borderWidth: 0.8
        }]
    },
    options: {
        responsive: true
    }
});