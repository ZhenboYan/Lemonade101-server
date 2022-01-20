let myChart = document.getElementById('myChart').getContext('2d');
// Chart.defaults.font.family = 'Georgia';
Chart.defaults.font.size=12;
Chart.defaults.color='black';

let massPopChart = new Chart(myChart,{
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets:[{
            label:'Population',
            data:[
            1,
            2,
            3,
            4,
            5,
            6,
            7
            ],
            // backgroundColor: 'pink'
            // backgroundColor:[
            //     'rgb(255, 0, 0, 0.85)',
            //     'rgb(255, 165, 0, 0.85)',
            //     'rgb(255, 255, 0, 0.85)',
            //     'rgb(0, 128, 0, 0.85)',
            //     'rgb(0, 0, 255, 0.85)',
            //     'rgb(75, 0, 130, 0.85)',
            //     'rgb(238, 130, 238, 0.85)'
            // ]
            backgroundColor:[
                'rgb(255, 99, 132, 0.85)',
                'rgb(54, 162, 235, 0.85)',
                'rgb(255, 206, 86, 0.85)',
                'rgb(75, 192, 192, 0.85)',
                'rgb(153, 102, 255, 0.85)',
                'rgb(255, 159, 64, 0.85)',
                'rgb(50, 128, 10, 0.85)'
            ],
            borderWidth:0.5,
            borderColor: '#777',
            hoverBorderWidth:3,
            hoverBorderColor: 'white'
        }]
    },
    options: {
        plugins:{
            title:{
                display:true,
                text:'Food Consumption (g)',
                fontSize:25
            },
            legend:{
                display:false, //true for pie
                position:'right',
                labels:{
                    color:'pink'
                }
            }
        },
        layout:{
            padding:{
                left:50,
                right:0,
                bottom:0,
                top:0
            }
        }
    }                
})