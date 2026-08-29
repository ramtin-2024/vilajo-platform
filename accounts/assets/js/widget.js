options = {
    series: [
        {
            name: '',
            data:[15.0,20,15.8,20.8,15,15.67,15.45,20.89,20.45,15.45,15.09,15.8,15.6,20,20.89,21.4,15.09,20.8,23.78,25.0,20,15.65,25,24.89,23,15.0,15.56,20.36,22.90,24.90,15.78]
        },
    ],
    chart: {
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
                    color: 'rgba(var(--primary-dark),1)',
                    opacity: 1,
                },
                {
                    offset: 50,
                    color: 'rgba(var(--primary-dark),.6)',
                    opacity: 1,
                },
                {
                    offset: 100,
                    color: 'rgba(var(--primary-dark),.4)',
                    opacity: 1,
                },
            ]
        }
    },
    legend: {
        show: false,
    },
    colors: ['rgba(var(--primary))'],
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


options = {
    series: [{
        name: 'کالری سوخته',
        data: [150, 220, 350, 180, 270, 160]
    }],
    chart: {
        type: 'bar',
        height: 310,
        fontFamily: '"Estedad-VF", sans-serif',
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
        show: false,
    },
    xaxis: {
        categories: ["۸ بهمن", "۱۱ بهمن", "۱۲ بهمن", "۱۳ بهمن", "۱۴ بهمن", "۱۵ بهمن"],
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
                height: 400
            },
        }
    },
        {
            breakpoint: 992,
            options: {
                chart: {
                    height: 300
                },
            }
        },
    ]
};

chart = new ApexCharts(document.querySelector("#productOverview"), options);
chart.render();


options = {
    series: [
        {
            name: 'درآمد',
            data: [35, 35, 18, 45, 45, 10, 20]
        },
        {
            name: 'مخارج',
            data: [10, 25, 15, 25, 20, 45]
        }
    ],
    chart: {
        height: 234,
        type: 'line',
        dropShadow: {
            enabled: true,
            top: 0,
            left: 0,
            blur: 1,
            color: ['rgba(var(--primary),1)', 'rgba(var(--success),1)'],
            opacity: .6
        }
    },

    colors: ['rgba(var(--primary),1)', 'rgba(var(--success),1)'],
    dataLabels: {
        enabled: false
    },

    stroke: {
        width: 2,
        curve: 'smooth',
        dashArray: [0,2],
    },
    annotations: {
        points: [{
            x: 'مرد',
            y: 20,
            marker: {
                size: 5,
                colors: '#fff',
                strokeColor: 'rgba(var(--success),1)',
                strokeWidth: 4,
                cssClass: 'marker-success',
            }
        },
            {
                x: 'مرد',
                y: 45,
                marker: {
                    size: 5,
                    colors: '#fff',
                    strokeColor: 'rgba(var(--primary),1)',
                    strokeWidth: 4,
                    cssClass: 'marker-primary',
                }
            }],
    },
    xaxis: {
        categories: [
            "فرور",
            "اردی",
            "خرد",
            "تیر",
            "مرد",
            "شهر",
            "مهر",
            "آبا",
            "آذر",
            "دی",
            "بهم",
            "اسف",
        ],
        labels: {
            show: true,
            style: {
                colors: 'rgba(var(--dark),1)',
                fontSize: '14px',
                fontFamily: '"Estedad-VF", sans-serif',
                fontWeight: 600,
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        tooltip: {
            enabled: false
        },

    },
    grid: {
        show: true,
        borderColor: 'rgba(var(--dark),.2)',
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        },
    },
    yaxis: {
        show: true,
        labels: {
            formatter: function (value) {
                return value + "M";
            },
            style: {
                colors: 'rgba(var(--dark),1)',
                fontSize: '14px',
                fontFamily: '"Estedad-VF", sans-serif',
                fontWeight: 600,
            },
        },
    },
    legend: {
        show: false
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

chart = new ApexCharts(document.querySelector("#projectExpense"), options);
chart.render();

// file update js
FilePond.create(
    document.querySelector('#fileUploaderBox'),
    {
        labelIdle: `
<img src="../assets/images/dashboard/project/emoji.gif" alt="gif" class="w-40 ">
<div class="filepond--label-action text-decoration-none">
<h5 class="text-info f-s-22">هیچ فایلی موجود نیست!</h5>
<p class="text-dark f-s-14">متاسفانه، در حال حاضر هیچ فایل بازی وجود ندارد</p>
</div>`,
    }
);

// clock js
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourHand = document.getElementById("hour");
    const minuteHand = document.getElementById("min");
    const secondHand = document.getElementById("sec");
    const hourDisplay = document.querySelector(".hour-display");
    // const minDisplay = document.querySelector(".min-display");

    hourDisplay.textContent = `${hour}H`;
    // minDisplay.textContent = `${minutes}M`;

    const hourDeg = (hour % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();