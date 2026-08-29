// basic bar chart //
var options = {
  series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'bar',
    height: 350
  },
  colors: ['#2e5ce2'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['کره جنوبی', 'کانادا', 'بریتانیا', 'هلند', 'ایتالیا', 'فرانسه', 'ژاپن', 'ایالات متحده', 'چین', 'آلمان'],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  xaxis: {
    categories: ['کره جنوبی', 'کانادا', 'بریتانیا', 'هلند', 'ایتالیا', 'فرانسه', 'ژاپن', 'ایالات متحده', 'چین', 'آلمان'],
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
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
    },
  },
  grid: {
    show: true,
    borderColor: 'rgba(var(--dark),.2)',
    strokeDashArray: 2,
  },
};

var chart = new ApexCharts(document.querySelector("#basic-bar"), options);
chart.render();


// Patterned bar chart //

var options = {
  series: [{
    name: 'مارین اسپرایت',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'گوساله ضربه زننده',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'تصویر تانک',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'شیب سطلی',
    data: [9, 7, 5, 8, 6, 9, 4]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'bar',
    height: 350,
    stacked: true,
    dropShadow: {
      enabled: true,
      blur: 1,
      opacity: 0.25
    }
  },
  colors: ['#8973ea', '#147534', "#e90bc4", "#eaea4f"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '60%',
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 2,
  },

  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },

  yaxis: {
    title: {
      text: undefined
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
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

    }
  },
  states: {
    hover: {
      filter: 'none'
    }
  },
  legend: {
    position: 'right',
    offsetY: 40
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

var chart = new ApexCharts(document.querySelector("#Patterned-bar"), options);
chart.render();


// stacked bar charts //
var options = {
  series: [{
    name: 'مارین اسپرایت',
    data: [44, 55, 41, 37, 22, 43, 21]
  }, {
    name: 'گوساله ضربه زننده',
    data: [53, 32, 33, 52, 13, 43, 32]
  }, {
    name: 'تصویر تانک',
    data: [12, 17, 11, 9, 15, 11, 20]
  }, {
    name: 'شیب سطلی',
    data: [9, 7, 5, 8, 6, 9, 4]
  }, {
    name: 'بچه دوباره متولد شده',
    data: [25, 12, 19, 32, 25, 24, 10]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'bar',
    height: 350,
    stacked: true,
  },
  colors: ['#8973ea', "#626263", "#147534", "#e90bc4", '#eaea4f'],
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        total: {
          enabled: true,
          offsetX: 0,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  xaxis: {
    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  yaxis: {
    title: {
      text: undefined
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
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "K"
      }
    }
  },
  fill: {
    opacity: 1
  },
  legend: {
    position: 'top',
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

var chart = new ApexCharts(document.querySelector("#stacked-chart"), options);
chart.render();


// Grouped Stacked Bars chart //
var options = {
  series: [
    {
      name: 'بودجه فصل1',
      group: 'بودجه',
      data: [44000, 55000, 41000, 67000, 22000]
    },
    {
      name: 'واقعی فصل1',
      group: 'واقعی',
      data: [48000, 50000, 40000, 65000, 25000]
    },
    {
      name: 'بودجه فصل2',
      group: 'بودجه',
      data: [13000, 36000, 20000, 8000, 13000]
    },
    {
      name: 'واقعی فصل2',
      group: 'واقعی',
      data: [20000, 40000, 25000, 10000, 12000]
    }
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'bar',
    height: 350,
    stacked: true,
  },
  colors: ['#2e5ce2', "#e90bc4"],
  stroke: {
    width: 1,
    colors: ['#fff']
  },
  dataLabels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    categories: [
      "تبلیغات آنلاین",
      "آموزش فروش",
      "تبلیغات چاپی",
      "کاتالوگ",
      'جلسات'
    ],
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },

  fill: {
    opacity: 1,
  },

  legend: {
    position: 'top',
    horizontalAlign: 'left'
  },
  yaxis: {
    labels: {
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

var chart = new ApexCharts(document.querySelector("#Grouped-chart"), options);
chart.render();