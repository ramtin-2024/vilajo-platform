// Line & Column Chart //
var options = {
  series: [{
    name: 'وبلاگ وب‌سایت',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'رسانه‌های اجتماعی',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'line',
  },
  colors:['#8973ea', "#626263"],
  stroke: {
    width: [0, 4]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },

  labels: ['01 ژانویه 2001', '02 ژانویه 2001', '03 ژانویه 2001', '04 ژانویه 2001', '05 ژانویه 2001', '06 ژانویه 2001', '07 ژانویه 2001', '08 ژانویه 2001', '09 ژانویه 2001', '10 ژانویه 2001', '11 ژانویه 2001', '12 ژانویه 2001'],
  yaxis: [{
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
    {
    opposite: true,

  }],
  xaxis: {
    labels: {
      offsetY: 60,
      offsetX: -20,
      style: {
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

var chart = new ApexCharts(document.querySelector("#mixed1"), options);
chart.render();



// ----- multiple y-axis chart ---- //
var options = {
  series: [{
    name: 'درآمد',
    type: 'column',
    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
  }, {
    name: 'جریان نقدی',
    type: 'column',
    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
  }, {
    name: 'درآمد',
    type: 'line',
    data: [20, 29, 37, 36, 44, 45, 50, 58]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'line',
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1, 4]
  },
  title: {
    text: '',
    align: 'left',
    offsetX: 110
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },

  },

  colors: ['#2e5ce2', '#e90bc4', '#535AE7'],
  yaxis: [
    {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#AECC34'
      },
      labels: {
        style: {
          colors: '#008FFB',
          fontSize: '14px',
          fontWeight: 500,
        }
      },
      title: {
        text: "",
        style: {
          color: '#008FFB',
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'درآمد',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#00E396'
      },
      labels: {
        style: {
          colors: '#00E396',
        }
      },
      title: {
        text: "",
        style: {
          color: '#00E396',
        }
      },
    },
    {
      seriesName: 'درآمد',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#FEB019'
      },
      labels: {
        style: {
          colors: '#FEB019',
        },
      },
      title: {
        text: "",
        style: {
          color: '#FEB019',
        }
      }
    },
  ],
  tooltip: {
    fixed: {
      enabled: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
  },
  legend: {
    horizontalAlign: 'left',
    offsetX: 40
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

var chart = new ApexCharts(document.querySelector("#mixed2"), options);
chart.render();


// Line & Area Chart //
var options = {
  series: [{
    name: 'تیم الف',
    type: 'area',
    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
  }, {
    name: 'تیم ب',
    type: 'line',
    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'line',
  },
  stroke: {
    curve: 'smooth'
  },
  fill: {
    type: 'solid',
    opacity: [0.35, 1],
  },

  colors: ['#147534', '#626263'],
  labels: ['01 اوت', '02 اوت', '03 اوت', '04 اوت', '05 اوت', '06 اوت', '07 اوت', '08 اوت', '09 اوت ', '10 اوت', '11 اوت'],
  markers: {
    size: 0
  },

  xaxis: {
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },

  },
  yaxis: [
    {
      title: {
        text: '',

      },
      labels: {
        style: {
          fontSize: '14px',
          fontWeight: 500,
        },
      },
    },
    {
      opposite: true,
      title: {
        text: '',
      },
    },

  ],
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " امتیاز";
        }
        return y;
      }
    }
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

var chart = new ApexCharts(document.querySelector("#mixed3"), options);
chart.render();



// Line, Column & Area Chart //

var options = {
  series: [{
    name: 'تیم الف',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'تیم ب',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'تیم ج',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'line',
    stacked: false,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },


  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },

  colors: [getLocalStorageItem('color-primary','#8973ea'),getLocalStorageItem('color-secondary','#626263'), '#147534'],
  yaxis: {
    title: {
      text: '',
    },
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
    min: 0
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " امتیاز";
        }
        return y;

      }
    }
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

var chart = new ApexCharts(document.querySelector("#mixed4"), options);
chart.render();

