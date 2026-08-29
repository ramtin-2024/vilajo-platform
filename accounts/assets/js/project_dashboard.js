// Toast js
window.addEventListener('load', () => {
    showToast("You have 6 tasks today. Keep it up ⚡");
});

function showToast(message) {
    let toastContainer = document.querySelector('.toastContainer');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toastContainer'; // Use className instead of id
        document.body.appendChild(toastContainer);
    }

    // Create the toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}


var options = {
    series: [
        {
            name: 'درآمد',
            data: [35, 35, 18, 45, 45, 10, 20]
        },
        {
            name: 'Expense',
            data: [10, 25, 15, 25, 20, 45]
        }
    ],
    chart: {
        height: 240,
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
        dashArray: [0, 2],
    },
    annotations: {
        points: [{
            x: 'Jun',
            y: 45,
            marker: {
                size: 5,
                colors: '#fff',
                strokeColor: 'rgba(var(--success),1)',
                strokeWidth: 4,
                cssClass: 'marker-success',
            }
        },
            {
                x: 'Jun',
                y: 10,
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
                colors: [],
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
                return value + "$";
            },
            style: {
                colors: [],
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
    responsive: [
        {
        breakpoint: 1399,
        options: {
            chart: {
                height: 220
            },
        }
    },
        {
            breakpoint: 567,
            options: {
                yaxis: {
                    show: false,
                }
            }
        },
    ]
};

var chart = new ApexCharts(document.querySelector("#projectExpense"), options);
chart.render();

const [timerDisplay, startBtn, stopBtn, resetBtn, historyList] = [
    document.querySelector('.timer-display'),
    document.getElementById('start-btn'),
    document.getElementById('stop-btn'),
    document.getElementById('reset-btn'),
    document.querySelector('.tracker-history-list'),
];

let timer, elapsedTime = 5, historyCount = 5;

const formatTime = ms => new Date(ms).toISOString().slice(11, 19);

const toggleButtons = (start, stop) => {
    startBtn.disabled = start;
    stopBtn.disabled = stop;
};

const addHistory = (time) => {
    const li = document.createElement('li');
    li.className = 'bg-info-300';
    li.innerHTML = `
   
        <div>
            <h6 class="text-info-dark mb-0">Session ${++historyCount}</h6>
        </div>
        <div class="text-dark f-w-600 ms-2">
            ${time}
        </div>
     `;
    historyList.appendChild(li);
};

startBtn.onclick = () => {
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timerDisplay.textContent = formatTime(elapsedTime);
    }, 100);
    toggleButtons(true, false);
};

stopBtn.onclick = () => {
    clearInterval(timer);
    addHistory(formatTime(elapsedTime));
    toggleButtons(false, true);
};

resetBtn.onclick = () => {
    clearInterval(timer);
    elapsedTime = 0;
    timerDisplay.textContent = formatTime(elapsedTime);
    toggleButtons(false, true);
};

// file uploader js

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

$('.task-container').slick({
    dots: false,
    speed: 1500,
    slidesToShow: 3,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
});

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

