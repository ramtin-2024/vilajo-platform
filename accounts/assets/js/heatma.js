//  **------heatma js**

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }
var options = {
    series: [{
    name: 'متریک1',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک2',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک3',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک4',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک5',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک6',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک7',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک8',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک9',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  }
  ],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false
  },
  colors: [getLocalStorageItem('color-primary','#8973ea'),getLocalStorageItem('color-secondary','#626263'),"#147534","#e90bc4","#eaea4f","#2e5ce2","#E5E3E0","#282632"],
  title: {
    text: ''
  },
  xaxis: {
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  yaxis: {
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
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

  var chart = new ApexCharts(document.querySelector("#heatma1"), options);
  chart.render();

// **------ chart 2**
var data = [
    {
      name: 'W1',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W2',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W3',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W4',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W5',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W6',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W7',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W8',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W9',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W10',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W11',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W12',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W13',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W14',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W15',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    }
  ]
  
  data.reverse()
  
  var colors = [getLocalStorageItem('color-primary','#8973ea'),getLocalStorageItem('color-secondary','#626263'),"#147534","#e90bc4","#eaea4f","#2e5ce2","#d1cac4","#282632"]
  
  colors.reverse()
var options = {
    series: data,
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    height: 450,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false
  },
  colors: colors,
  xaxis: {
    type: 'category',
    categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  yaxis:{
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },

  title: {
    text: ''
  },
  grid: {
    padding: {
      right: 20
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

  var chart = new ApexCharts(document.querySelector("#heatma2"), options);
  chart.render();



//  **------chart 3**
var options = {
    series: [{
      name: 'ژانویه',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'فوریه',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'مارس',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'آوریل',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'می',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'ژوئن',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'جولای',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'آگوست',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'سپتامبر',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    }
  ],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 0,
      useFillColorAsStroke: true,
      colorScale: {
        ranges: [{
            from: -30,
            to: 5,
            name: 'کم',
            color: getLocalStorageItem('color-primary','#8973ea')
          },
          {
            from: 6,
            to: 20,
            name: 'متوسط',
            color: getLocalStorageItem('color-secondary','#626263')
          },
          {
            from: 21,
            to: 45,
            name: 'زیاد',
            color: '#147534'
          },
          {
            from: 46,
            to: 55,
            name: 'شدید',
            color: '#e90bc4'
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1
  },
  title: {
    text: ''
  },
  xaxis:{
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  yaxis:{
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
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

  var chart = new ApexCharts(document.querySelector("#heatma3"), options);
  chart.render();

//  **------chart 4**
var options = {
    series: [{
    name: 'متریک1',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },

  {
    name: 'متریک2',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },

  {
    name: 'متریک3',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },

  {
    name: 'متریک4',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },

  {
    name: 'متریک5',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک6',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک7',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک8',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'متریک8',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }
  ],
    chart: {
      fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'heatmap',
  },
  stroke: {
    width: 0
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [{
            from: 0,
            to: 50,
            color: '#F9D249'
          },
          {
            from: 51,
            to: 100,
            color: '#535AE7'
          },
        ],
      },
  
    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
    }
  },
  xaxis: {
    type: 'category',
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    }
  },
  yaxis:{
    labels:{
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
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

  var chart = new ApexCharts(document.querySelector("#heatma4"), options);
  chart.render();
