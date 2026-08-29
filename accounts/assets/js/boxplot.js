//  **------ boxplot chart 1**
var options = {
    series: [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Jan 2016',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Jan 2017',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Jan 2018',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Jan 2019',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Jan 2020',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Jan 2021',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    type: 'boxPlot',
    height: 350
  },
  title: {
    text: '',
    align: 'left'
  },
 
  plotOptions: {
    boxPlot: {
      colors: {
        upper: getLocalStorageItem('color-primary','#8973ea'),
        lower: getLocalStorageItem('color-secondary','#626263')
      }
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

  var chart = new ApexCharts(document.querySelector("#boxplot1"), options);
  chart.render();

//  **------boxplot chart 2**
var options = {
    series: [
    {
      name: 'box',
      type: 'boxPlot',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: [54, 66, 69, 75, 88]
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: [43, 65, 69, 76, 81]
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: [31, 39, 45, 51, 59]
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: [39, 46, 55, 65, 71]
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: [29, 31, 35, 39, 44]
        }
      ]
    },
    {
      name: 'outliers',
      type: 'scatter',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: 32
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: 25
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: 64
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 27
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 78
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: 15
        }
      ]
    }
  ],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    type: 'boxPlot',
    height: 350
  },
  title: {
    text: '',
    align: 'left'
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      formatter: function(val) {
        return new Date(val).getFullYear()
      }
    },
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
 
  tooltip: {
    shared: false,
    intersect: true
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: '#147534',
        lower: '#e90bc4'
      }
    }
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

  var chart = new ApexCharts(document.querySelector("#boxplot2"), options);
  chart.render();

//  **------boxplot chart 3**
var options = {
    series: [
    {
      data: [
        {
          x: 'دسته بندی A',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'دسته بندی B',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'دسته بندی C',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'دسته بندی D',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'دسته بندی E',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'دسته بندی F',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'دسته بندی G',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    type: 'boxPlot',
    height: 350
  },
  title: {
    text: '',
    align: 'left'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%'
    },
    boxPlot: {
      colors: {
        upper: '#2e5ce2',
        lower: '#eaea4f'
      }
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
 
  stroke: {
    colors: ['#6c757d']
  }
  };

  var chart = new ApexCharts(document.querySelector("#boxplot3"), options);
  chart.render();
