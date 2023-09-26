// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     themeSystem: 'bootstrap5',
//     contentHeight: 200,
//     editable: true,
//     initialView: 'dayGridMonth',
//     events: [], // Initialize with an empty array of events
//     dateClick: function(info) {
//       var date = info.dateStr;

//       $('#createEventModal').modal('show');
//       $('#eventDate').val(date);
//     }
//   });

  

//   $('#createEventForm').on('submit', function(event) {
//     event.preventDefault();




//     var title = $('#eventTitle').val();
//     var date = $('#eventDate').val();

//     calendar.addEvent({
//       title: title,
//       start: date,
//       end: date,
//       allDay: true
//     });

//     $('#createEventModal').modal('hide');
//   });

//   calendar.render();
// });








