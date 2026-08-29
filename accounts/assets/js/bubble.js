//  **------Bubble_chart 1**
function generateData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([baseval, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
var options = {
    series: [{
    name: 'حباب1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'حباب2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'حباب3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: 'حباب4',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
      height: 350,
      type: 'bubble',
  },
  dataLabels: {
      enabled: false
  },
  fill: {
      opacity: 0.8
  },
  title: {
      text: ''
  },
  xaxis: {
      tickAmount: 12,
      type: 'datetime',
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },

  colors: ['rgba(var(--primary),1)','rgba(var(--success),1)','rgba(var(--danger),1)','rgba(var(--warning),1)'],
  yaxis: {
      max: 70,
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

  var chart = new ApexCharts(document.querySelector("#bubble1"), options);
  chart.render();


//  **------ Bubble_chart 2**


var options = {
    series: [{
    name: '3D حباب 1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: '3D حباب 2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: '3D حباب 3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  },
  {
    name: '3D حباب 4',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'bubble',
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'gradient',
  },
  title: {
    text: ''
  },
  xaxis: {
    tickAmount: 12,
    type: 'datetime',
    labels: {
        rotate: 0,
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }

  },

colors: ['#8973ea','#147534','#e90bc4','#2e5ce2'],
  yaxis: {
    max: 70,
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  theme: {
    palette: 'palette2'
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

  var chart = new ApexCharts(document.querySelector("#bubble2"), options);
  chart.render();
