var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Sílica', 'Borracha', 'Carbono Negro'],

        datasets: [{
            data: [6240, 10000, 8000,],
            backgroundColor: [
                'rgb(255, 211, 55)',
                'rgb(251, 0, 0)',
                'rgb(1, 5, 120)',

            ],
            borderColor: [
                'rgb(255, 159, 55)',
                'rgb(227, 0, 0)',
                'rgb(1, 5, 120)',

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});

    document.addEventListener('DOMContentLoaded', function() {

        var statusText = document.getElementById('statusText');

        var statusButton = document.getElementById('statusButton');
        

        statusButton.addEventListener('click', function() {

            if (statusText.textContent === 'ON') {
                statusText.textContent = 'OFF';
            } else {
                statusText.textContent = 'ON';
            }
        });
    });