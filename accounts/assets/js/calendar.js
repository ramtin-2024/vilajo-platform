//  **------calender **

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  // Get today's date
  var today = new Date();

  // Helper function to add days to today
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result.toISOString().split('T')[0];
  }

  // Helper function to format date and time
  function formatDateTime(date, hours, minutes) {
    var result = new Date(date);
    result.setHours(hours, minutes, 0);
    return result.toISOString().split('.')[0]; // YYYY-MM-DDTHH:mm:ss
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'fa',
    initialView: 'dayGridMonth',
    navLinks: true,
    editable: true,
    dayMaxEvents: true,
    headerToolbar: {
      left: 'prev,next,addEventButton',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    customButtons: {
      addEventButton: {
        text: 'افزودن رویداد...',
        click: function () {
          var dateStr = prompt('تاریخی به فرمت YYYY-MM-DD وارد کنید');
          var date = new Date(dateStr + 'T00:00:00');

          if (!isNaN(date.valueOf())) {
            calendar.addEvent({
              title: 'رویداد پویا',
              start: date,
              allDay: true
            });
            alert('عالی. حالا پایگاه داده خود را به‌روزرسانی کنید...');
          } else {
            alert('تاریخ نامعتبر.');
          }
        }
      }
    },
    events: [
      {
        title: 'تعطیلات',
        start: addDays(today, -1), // Yesterday
        end: addDays(today, 0),   // Today
        color: '#26C450',
        className: 'event-success',
      },
      {
        title: 'جلسه',
        start: addDays(today, 6), // 6 days from today
        className: 'event-primary',
      },
      {
        title: 'جلسه',
        start: addDays(today, 13), // 13 days from today
        className: 'event-primary',
      },
      {
        title: 'تور',
        start: addDays(today, 16), // 16 days from today
        end: addDays(today, 19),   // 19 days from today
        className: 'event-warning',
      },
      {
        title: 'ناهار',
        start: addDays(today, 28), // 28 days from today
        end: addDays(today, 29),   // 29 days from today
        color: '#F09E3C',
        className: 'event-secondary',
      },
      {
        title: 'جلسه',
        start: formatDateTime(addDays(today, 1), 10, 30), // Tomorrow at 10:30
        end: formatDateTime(addDays(today, 1), 12, 30),   // Tomorrow at 12:30
      },
      {
        title: 'ناهار',
        start: formatDateTime(addDays(today, 1), 12, 0), // Tomorrow at 12:00
      },
      {
        title: 'جلسه',
        start: formatDateTime(addDays(today, 1), 14, 30), // Tomorrow at 14:30
      },
      {
        title: 'ساعت خوش',
        start: formatDateTime(addDays(today, 1), 17, 30), // Tomorrow at 17:30
      },
      {
        title: 'شام',
        start: formatDateTime(addDays(today, 1), 20, 0), // Tomorrow at 20:00
      },
      {
        groupId: 'availableForMeeting',
        start: formatDateTime(today, 10, 0), // Today at 10:00
        end: formatDateTime(today, 16, 0),   // Today at 16:00
        display: 'background',
      },
      {
        groupId: 'availableForMeeting',
        start: formatDateTime(addDays(today, 2), 10, 0), // Day after tomorrow at 10:00
        end: formatDateTime(addDays(today, 2), 16, 0),   // Day after tomorrow at 16:00
        display: 'background'
      },
    ],
    eventClick: function () {
      $('#exampleModal').modal('show');
    },
    selectable: true,
    selectMirror: true,
    select: function (arg) {
      var title = prompt('عنوان رویداد:');
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      }
      calendar.unselect()
    },

    droppable: true,
    drop: function (arg) {
      if (document.getElementById('drop-remove').checked) {
        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
      }
    }
  })

  var containerEl = document.getElementById('events-list');
  new FullCalendar.Draggable(containerEl, {
    itemSelector: '.list-event',
    eventData: function (eventEl) {
      return {
        title: eventEl.innerText.trim(),
        start: new Date(),
        className: eventEl.getAttribute('data-class')
      }
    }
  });


  calendar.render();
});

// **------ slider js**

$('.slider').slick({
  dots: false,
  speed: 1000,
  slidesToShow: 3,
  centerMode: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 1000,
});
