// Basic Timeline Chart//

var options = {
  series: [
    {
      data: [
        {
          x: 'کد',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'تست',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'اعتبارسنجی',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'استقرار',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 16,
    labels: {
      rotate: -30,
      rotateAlways: true,
      offsetY: 25,
      offsetX: 40,
      formatter: function (value) {
        // value is a timestamp (ms) or ISO date string depending on chart lib
        const dt = new Date(value);
        // 'fa-IR-u-ca-persian' asks Intl to use Persian (Jalali) calendar
        // adjust options to the format you want
        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
          month: 'short',
          day: '2-digit'
        }).format(dt);
      },

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
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  colors: [getLocalStorageItem('color-primary', '#8973ea')],
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },

    },
  }],
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

var chart = new ApexCharts(document.querySelector("#timeline1"), options);
chart.render();



// Different color for each bar chart //

var options = {
  series: [
    {
      data: [
        {
          x: 'تحلیل',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime()
          ],
          fillColor: getLocalStorageItem('color-secondary', '#626263')
        },
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ],
          fillColor: '#147534'
        },
        {
          x: 'کد نویسی',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime()
          ],
          fillColor: '#e90bc4'
        },
        {
          x: 'تست نویسی',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ],
          fillColor: '#eaea4f'
        },
        {
          x: 'استقرار',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime()
          ],
          fillColor: '#2e5ce2'
        }
      ]
    }
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false
      }
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      var label = opts.w.globals.labels[opts.dataPointIndex]
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return label + ': ' + diff + ' روز'
    },
    style: {
      colors: ['#f3f4f5', '#fff']
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 16,
    labels: {
      rotate: -30,
      rotateAlways: true,
      offsetY: 25,
      offsetX: 40,
      formatter: function (value) {
        // value is a timestamp (ms) or ISO date string depending on chart lib
        const dt = new Date(value);
        // 'fa-IR-u-ca-persian' asks Intl to use Persian (Jalali) calendar
        // adjust options to the format you want
        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
          month: 'short',
          day: '2-digit'
        }).format(dt);
      },
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },

  },
  yaxis: {
    show: false,
    labels: {
      style: {
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  grid: {
    row: {
      opacity: 1
    }
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }],
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

var chart = new ApexCharts(document.querySelector("#timeline2"), options);
chart.render();



// Multi-series Timeline //

var options = {
  series: [
    {
      name: 'باب',
      data: [
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'کد',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'تست',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'جو',
      data: [
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'کد',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'تست',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-19').getTime()
          ]
        }
      ]
    }
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return diff + ' روز'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100]
    }
  },

  colors: ['#282632', getLocalStorageItem('color-primary', '#8973ea')],
  xaxis: {
    type: 'datetime',
    tickAmount: 16,
    labels: {
      rotate: -30,
      rotateAlways: true,
      offsetY: 25,
      offsetX: 40,
      formatter: function (value) {
        // value is a timestamp (ms) or ISO date string depending on chart lib
        const dt = new Date(value);
        // 'fa-IR-u-ca-persian' asks Intl to use Persian (Jalali) calendar
        // adjust options to the format you want
        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
          month: 'short',
          day: '2-digit'
        }).format(dt);
      },
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
  legend: {
    position: 'top'
  },
  responsive: [{
    breakpoint: 768,
    options: {
      chart: {
        height: 280,
      },
      yaxis: {
        show: false
      },
    },
  }],

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

var chart = new ApexCharts(document.querySelector("#timeline3"), options);
chart.render();



// Advanced Timeline (Multiple range) //

var options = {
  series: [
    {
      name: 'باب',
      data: [
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'کد',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'کد',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'تست',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime()
          ]
        },
        {
          x: 'تست',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime()
          ]
        },
        {
          x: 'اعتبارسنجی',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime()
          ]
        },
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime()
          ],
        }
      ]
    },
    {
      name: 'جو',
      data: [
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime()
          ]
        },
        {
          x: 'تست',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
        {
          x: 'کد',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime()
          ]
        },
        {
          x: 'استقرار',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime()
          ]
        },
        {
          x: 'طراحی',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime()
          ]
        }
      ]
    },
    {
      name: 'دن',
      data: [
        {
          x: 'کد',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime()
          ]
        },
        {
          x: 'اعتبارسنجی',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime()
          ],
          goals: [
            {
              name: 'Break',
              value: new Date('2019-03-07').getTime(),
              strokeColor: '#CD2F2A'
            }
          ]
        },
      ]
    }
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 450,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%'
    }
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
  xaxis: {
    type: 'datetime',
    tickAmount: 16,
    labels: {
      rotate: -30,
      rotateAlways: true,
      offsetY: 25,
      offsetX: 40,
      formatter: function (value) {
        // value is a timestamp (ms) or ISO date string depending on chart lib
        const dt = new Date(value);
        // 'fa-IR-u-ca-persian' asks Intl to use Persian (Jalali) calendar
        // adjust options to the format you want
        return new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
          month: 'short',
          day: '2-digit'
        }).format(dt);
      },
      style: {
        colors: [],
        fontSize: '14px',
        fontWeight: 500,
      },
    },
  },
  colors: ['#282632', getLocalStorageItem('color-primary', '#8973ea')],
  stroke: {
    width: 1
  },
  fill: {
    type: 'solid',
    opacity: 0.6
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left'
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

var chart = new ApexCharts(document.querySelector("#timeline4"), options);
chart.render();



// Timeline_range_chart 5
var options = {
  series: [
    // George Washington
    {
      name: 'جورج واشنگتن',
      data: [
        {
          x: 'رئیس جمهور',
          y: [
            new Date(1789, 3, 30).getTime(),
            new Date(1797, 2, 4).getTime()
          ]
        },
      ]
    },
    // John Adams
    {
      name: 'جان آدامز',
      data: [
        {
          x: 'رئیس جمهور',
          y: [
            new Date(1797, 2, 4).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'معاون رئیس جمهور',
          y: [
            new Date(1789, 3, 21).getTime(),
            new Date(1797, 2, 4).getTime()
          ]
        }
      ]
    },
    // Thomas Jefferson
    {
      name: 'توماس جفرسون',
      data: [
        {
          x: 'رئیس جمهور',
          y: [
            new Date(1801, 2, 4).getTime(),
            new Date(1809, 2, 4).getTime()
          ]
        },
        {
          x: 'معاون رئیس جمهور',
          y: [
            new Date(1797, 2, 4).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        },
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime()
          ]
        }
      ]
    },
    // Aaron Burr
    {
      name: 'آرون بور',
      data: [
        {
          x: 'معاون رئیس جمهور',
          y: [
            new Date(1801, 2, 4).getTime(),
            new Date(1805, 2, 4).getTime()
          ]
        }
      ]
    },
    // George Clinton
    {
      name: 'جورج کلینتون',
      data: [
        {
          x: 'معاون رئیس جمهور',
          y: [
            new Date(1805, 2, 4).getTime(),
            new Date(1812, 3, 20).getTime()
          ]
        }
      ]
    },
    // John Jay
    {
      name: 'جان جی',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1789, 8, 25).getTime(),
            new Date(1790, 2, 22).getTime()
          ]
        }
      ]
    },
    // Edmund Randolph
    {
      name: 'ادموند راندولف',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1794, 0, 2).getTime(),
            new Date(1795, 7, 20).getTime()
          ]
        }
      ]
    },
    // Timothy Pickering
    {
      name: 'تیموتی پیکرینگ',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1795, 7, 20).getTime(),
            new Date(1800, 4, 12).getTime()
          ]
        }
      ]
    },
    // Charles Lee
    {
      name: 'چارلز لی',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1800, 4, 13).getTime(),
            new Date(1800, 5, 5).getTime()
          ]
        }
      ]
    },
    // John Marshall
    {
      name: 'جان مارشال',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1800, 5, 13).getTime(),
            new Date(1801, 2, 4).getTime()
          ]
        }
      ]
    },
    // Levi Lincoln
    {
      name: 'لوی لینکلن',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1801, 2, 5).getTime(),
            new Date(1801, 4, 1).getTime()
          ]
        }
      ]
    },
    // James Madison
    {
      name: 'جیمز مدیسون',
      data: [
        {
          x: 'وزیر امور خارجه',
          y: [
            new Date(1801, 4, 2).getTime(),
            new Date(1809, 2, 3).getTime()
          ]
        }
      ]
    },
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
      rangeBarGroupRows: true
    }
  },
  colors: [
    "#8973ea", "#147534", "#eaea4f", "#2e5ce2", "#282632",
    "#8973ea", "#626263", "#e90bc4", "#eaea4f", "#2e5ce2",
  ],
  fill: {
    type: 'solid'
  },
  xaxis: {
    type: 'datetime',
    labels: {
      rotate: -30,
      rotateAlways: true,
      offsetY: 25,
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
  legend: {
    position: 'right'
  },
  tooltip: {
    custom: function (opts) {
      const fromYear = new Date(opts.y1).getFullYear()
      const toYear = new Date(opts.y2).getFullYear()

      const w = opts.ctx.w
      let ylabel = w.globals.labels[opts.dataPointIndex]
      let seriesName = w.config.series[opts.seriesIndex].name
        ? w.config.series[opts.seriesIndex].name
        : ''
      const color = w.globals.colors[opts.seriesIndex]

      return (
        '<div class="apexcharts-tooltip-rangebar">' +
        '<div> <span class="series-name" style="color: ' +
        color +
        '">' +
        (seriesName ? seriesName : '') +
        '</span></div>' +
        '<div> <span class="category">' +
        ylabel +
        ' </span> <span class="value start-value">' +
        fromYear +
        '</span> <span class="separator">-</span> <span class="value end-value">' +
        toYear +
        '</span></div>' +
        '</div>'
      )
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

var chart = new ApexCharts(document.querySelector("#timeline5"), options);
chart.render();