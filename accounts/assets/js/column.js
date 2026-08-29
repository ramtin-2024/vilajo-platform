// basic chart //

var options = {
  series: [{
    name: 'سود خالص',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'درآمد',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'جریان نقدی آزاد',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'bar',
    height: 350
  },
  colors: ['#8973ea', '#147534', '#e90bc4'],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر'],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  fill: {
    opacity: 1
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " هزار"
      },
    }
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

var chart = new ApexCharts(document.querySelector("#basic-colum"), options);
chart.render();

// dumbell chart //

var options = {
  series: [
    {
      data: [
        {
          x: '2008',
          y: [2800, 4500]
        },
        {
          x: '2009',
          y: [3200, 4100]
        },
        {
          x: '2010',
          y: [2950, 7800]
        },
        {
          x: '2011',
          y: [3000, 4600]
        },
        {
          x: '2012',
          y: [3500, 4100]
        },
        {
          x: '2013',
          y: [4500, 6500]
        },
        {
          x: '2014',
          y: [4100, 5600]
        }
      ]
    }
  ],
  chart: {
    height: 350,
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'rangeBar',
    zoom: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 25,
      dumbbellColors: [['#000000', '#000000']]
    }
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: 'top',
    horizontalAlign: 'right',
    customLegendItems: ['محصول A', 'محصول B'],
  },
  colors: ['#eaea4f', '#147534'],
  fill: {
    type: 'gradient',
    gradient: {
      type: 'vertical',
      gradientToColors: ['#e90bc4'],
      inverseColors: true,
      stops: [0, 100]
    }
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: true
      }
    },
    yaxis: {
      lines: {
        show: false
      },
    }
  },
  xaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    tickPlacement: 'on'
  },
  yaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
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

var chart = new ApexCharts(document.querySelector("#Dumbbell-chart"), options);
chart.render();

// column chart //
var options = {
  series: [{
    name: 'سرو',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: '50%',
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 0
  },
  grid: {
    row: {
      colors: ['#fff', '#f2f2f2']
    }
  },
  xaxis: {
    labels: {
      rotate: 30,
      offsetY: 5,
      rotateAlways: true,
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    categories: ['سیب', 'پرتقال', 'توت فرنگی', 'آناناس', 'انبه', 'موز',
      'توت سیاه', 'گلابی', 'هندوانه', 'گیلاس', 'انار', 'نارنگی', 'پاپایا'
    ],
    tickPlacement: 'on'
  },
  colors: ['#2e5ce2'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: "horizontal",
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.85,
      opacityTo: 0.85,
      stops: [50, 0, 100]
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      },
    }
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

var chart = new ApexCharts(document.querySelector("#Column-chart"), options);
chart.render();

// column with marker chart //
var options = {
  series: [
    {
      name: 'واقعی',
      data: [
        {
          x: '2011',
          y: 1292,
          goals: [
            {
              name: 'مورد انتظار',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2012',
          y: 4432,
          goals: [
            {
              name: 'مورد انتظار',
              value: 5400,
              strokeHeight: 5,
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2013',
          y: 5423,
          goals: [
            {
              name: 'مورد انتظار',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2014',
          y: 6653,
          goals: [
            {
              name: 'مورد انتظار',
              value: 6500,
              strokeHeight: 5,
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2015',
          y: 8133,
          goals: [
            {
              name: 'مورد انتظار',
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: 'round',
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2016',
          y: 7132,
          goals: [
            {
              name: 'مورد انتظار',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2017',
          y: 7332,
          goals: [
            {
              name: 'مورد انتظار',
              value: 8700,
              strokeHeight: 5,
              strokeColor: '#2e5ce2'
            }
          ]
        },
        {
          x: '2018',
          y: 6553,
          goals: [
            {
              name: 'مورد انتظار',
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: '#2e5ce2'
            }
          ]
        }
      ]
    }
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'bar'
  },

  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#eaea4f'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['واقعی', 'مورد انتظار'],
    markers: {
      fillColors: ['#eaea4f', '#2e5ce2']
    }
  },
  xaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
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

var chart = new ApexCharts(document.querySelector("#markers-chart"), options);
chart.render();