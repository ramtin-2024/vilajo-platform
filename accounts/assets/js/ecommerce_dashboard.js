// overview chart

options = {
  series: [{
    name: 'کالری سوخته',
    data: [150, 220, 350, 180, 270, 160]
  }],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'bar',
    height: 324,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 15, // Rounds the bars
      columnWidth: '60',
      distributed: true, // Different colors for each bar
      endingShape: 'rounded'
    }
  },
  colors: ['rgba(var(--primary),1)', 'rgba(var(--primary),.3)','rgba(var(--primary),1)' ,'rgba(var(--primary),1)','rgba(var(--danger),.3)','rgba(var(--danger-dark),1)'], // Custom colors for each bar
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["۸ بهم", "۱۱ بهم", "۱۲ بهم", "۱۳ بهم", "۱۴ بهم", "۱۵ بهم"],
    labels: {
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: '14px',
        fontWeight: 600,
        colors: 'rgba(var(--dark),1)',
      },
    },
    offsetX: 0,
    offsetY: 0,
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  yaxis: {
    show: false
  },
  grid: {
    show: false // Disable grid to achieve the clean look
  },
  tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      // Custom tooltip content
      var data = series[seriesIndex][dataPointIndex];
      var category = w.config.xaxis.categories[dataPointIndex];
      return '<div class="arrow_box p-2">' +
          '<span>' + category + '</span>' +
          '<div style="font-weight: bold; font-size: 14px;">وزنه‌برداری</div>' +
          '<span>' + data + ' کیلوکالری</span>' +
          '</div>';
    },
    style: {
      fontSize: '16px',
    },
  },

  fill: {
    type: ['solid', 'solid', 'image', 'solid', 'solid', 'image'],
    image: {
      src: ['','','../assets/images/dashboard/ecommerce-dashboard/01.png','','','../assets/images/dashboard/ecommerce-dashboard/03.png'], // Ensure the paths are correct
      width: 400,
      height: 400
    },
  },
  responsive: [{
    breakpoint: 1399,
    options: {
      chart: {
        height: 304
      },
    }
  },
  ]
};

chart = new ApexCharts(document.querySelector("#productOverview "), options);
chart.render();


// totalSales chart
options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    height: 320,
    type: 'donut',
    dropShadow: {
      enabled: false,
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

  legend: {
    position: 'bottom',
    fontSize: '14px',
    // fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    labels: {
      colors: 'rgba(var(--secondary),1)',
      useSeriesColors: false
    },
    markers: {
      width: 15,
      height: 15,
      radius: 5,
      offsetX: -4,
    },
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: false,
          total: {
            showAlways: false,
            show: false
          }
        }
      }
    }
  },
  labels: ["کمدی", "اکشن", "علمی تخیلی", "درام", "ترسناک"],

  dataLabels: {
  enabled: false,
    dropShadow: {
      blur: 3,
      opacity: 0.8
    }
  },
  colors: ['rgba(var(--primary-dark),1)','rgba(var(--primary),1)','rgba(var(--danger-dark),1)','rgba(var(--danger),.3)','rgba(var(--warning),1)'],
  fill: {
    // type: 'pattern',
    type: ['pattern', 'solid', 'pattern', 'solid', 'solid'],
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'horizontalLines', 'horizontalLines', 'circles','horizontalLines'],
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
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',

    },
  },
};

chart = new ApexCharts(document.querySelector("#totalSales"), options);
chart.render();

// salesChart chart

options = {
  series: [{
    name: 'data 1',
    data: [
      3.2, 4, 2.15, 3, 2.4, 2, 1.2, 4, 2.1, 1
    ]
  },
    {
      name: 'data 2',
      data: [
        -3.2, -4, -2.15, -3, -2.4, -2, -1.2, -4, -2.1, -1
      ]
    },
    {
      name: 'data 3',
      data: [
        -2.25, -3, -2.5, -1, -2.40, -1.5, -2.20, -3, -2.65, -2
      ]
    },
    {
      name: 'data 4',
      data: [
        2.25, 3, 2.5, 1, 2.40, 1.5, 2.20, 3, 2.65, 2
      ]
    }],

  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: "bar",
    height: 240,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      vertical: true,
      columnWidth: '35',
      borderRadius: [2, 2, 2, 2],
      startingShape: "rounded",
      endingShape: "rounded",
    },
  },
  colors: ['rgba(var(--warning),.3)', 'rgba(var(--danger-dark),1)', 'rgba(var(--danger),.3)', 'rgba(var(--warning-dark),1)'],
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "جولای",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
    axisTicks: {
      offsetX: 0,
      offsetY: 0,
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: false,
  }
};

chart = new ApexCharts(document.querySelector("#salesChart"), options);
chart.render();

// productSold chart

options = {
  series: [
    {
      name: '',
      data:[15.0,20,15.8,20.8,15,15.67,15.45,20.89,20.45,15.45,15.09,15.8,15.6,20,20.89,21.4,15.09,20.8,23.78,25.0,20,15.65,25,24.89,23,15.0,15.56,20.36,22.90,24.90,15.78]
    },
  ],
  chart: {
    fontFamily: '"Estedad-VF", sans-serif',
    type: 'line',
    height: 75,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: 'smooth'
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(var(--danger-dark),1)',
          opacity: 1,
        },
        {
          offset: 50,
          color: 'rgba(var(--danger-dark),.6)',
          opacity: 1,
        },
        {
          offset: 100,
          color: 'rgba(var(--danger-dark),.4)',
          opacity: 1,
        },
      ]
    }
  },
  legend: {
    show: false,
  },
  colors: ['rgba(var(--danger))'],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    min: 15,
    max: 25,
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      top: -10,
      right: 0,
      bottom: -15,
      left: 0,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: '16px',
      fontFamily: '"Estedad-VF", sans-serif',
    },
  },
};

chart = new ApexCharts(document.querySelector("#productSold"), options);
chart.render();

//  Add Remove js

document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('.toggleCustomerButton');

  toggleButtons.forEach(button => new bootstrap.Tooltip(button));

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const icon = button.querySelector('i');
      const isPlus = icon.classList.toggle('iconoir-minus', icon.classList.contains('iconoir-plus'));
      icon.classList.toggle('iconoir-plus', !isPlus);

      button.setAttribute('data-bs-title', isPlus ? 'Removed' : 'Added');

      button.classList.toggle('text-light-danger', isPlus);
      button.classList.toggle('text-light-primary', !isPlus);

      const tooltipInstance = bootstrap.Tooltip.getInstance(button);
      tooltipInstance.setContent({ '.tooltip-inner': button.getAttribute('data-bs-title') });
    });
  });
});

// Orders details slider js
$('.order-content-list').slick({
  dots: false,
  speed: 1000,
  slidesToShow: 3,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 1000,
});


$(function() {
  var tooltip_init = {
    init: function () {
      $("button").tooltip();
    }
  };
  tooltip_init.init()
});