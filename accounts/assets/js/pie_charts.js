

// **------ pie_charts 1**
var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
        fontFamily: '"Estedad-VF", sans-serif',
        height: 340,
        type: 'pie',
    },
    tooltip: {
        x: {
            show: false,
        },
        style: {
            fontSize: '16px',
        },
    },
    colors: [getLocalStorageItem('color-primary','#8973ea'),getLocalStorageItem('color-secondary','#626263'),'#147534','#e90bc4','#eaea4f'],
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    legend: {
      position: 'bottom'
  },
    responsive: [{
        breakpoint: 1366,
        options: {
            chart: {

                height: 250
            },
            legend: {
              show: false,
            },
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#pie1"), options);
chart.render();

// updating donus chart //
var options = {
    series: [44, 55, 13, 33],
    chart: {
        height: 340,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        colors: [getLocalStorageItem('color-primary','#48BECE'),getLocalStorageItem('color-secondary','#8B8476'), '#AECC34','#FF5E40','#F9D249','#535AE7','#E5E3E0','#48443D']
    },
    fill: {
        colors: [getLocalStorageItem('color-primary','#48BECE'),getLocalStorageItem('color-secondary','#8B8476'), '#AECC34','#FF5E40','#F9D249','#535AE7','#E5E3E0','#48443D']
    },
    labels: ["Device 1", "Device 2","Device 3","Device 4"],

    colors:[getLocalStorageItem('color-primary','#48BECE'),getLocalStorageItem('color-secondary','#8B8476'), '#AECC34','#FF5E40','#F9D249','#535AE7','#E5E3E0','#48443D'],
    responsive: [{
        breakpoint: 1366,
        options: {
            chart: {
                height: 240
            },
            legend: {
                show: false,
            },
        }
    }],
    legend: {
        position: 'bottom',
        offsetY: 0,

    },
    tooltip: {
        x: {
            show: false,
        },
        style: {
            fontSize: '16px',
        },
    },
};

var chartItem = new ApexCharts(document.querySelector("#chart9"), options);
chartItem.render();


function appendData() {
    var arr = chartItem.w.globals.series.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    return arr;
}

function removeData() {
    var arr = chartItem.w.globals.series.slice()
    arr.pop()
    return arr;
}

function reset() {
    return [44, 55, 13, 33];

}

document.querySelector("#add").addEventListener("click", function() {
    chartItem.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function() {
    chartItem.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function() {
    chartItem.updateSeries(reset())
})


// simple donut chart //
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        fontFamily: '"Estedad-VF", sans-serif',
        type: 'donut',
    },
    colors:['#8973ea', '#626263', '#147534', '#e90bc4', '#2e5ce2',],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    tooltip: {
        x: {
            show: false,
        },
        style: {
            fontSize: '16px',
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();


// patterned donut chart //
var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        fontFamily: '"Estedad-VF", sans-serif',
        width: 380,
        type: 'donut',
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        showAlways: true,
                        show: true
                    }
                }
            }
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
        },
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    theme: {
        palette: 'palette2'
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();

// pie chart with img //
var options = {
    series: [44, 33, 54, 45],
    chart: {
        fontFamily: '"Estedad-VF", sans-serif',
        width: 380,
        type: 'pie',
    },
    colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
    fill: {
        type: 'image',
        opacity: 0.85,
        image: {
            src: ['../assets/images/blog-app/03.jpg', '../assets/images/blog-app/03.jpg', '../assets/images/blog-app/03.jpg', '../assets/images/blog-app/03.jpg'],
            width: 25,
            imagedHeight: 25
        },
    },
    stroke: {
        width: 4
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#111']
        },
        background: {
            enabled: true,
            foreColor: '#fff',
            borderWidth: 0
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();