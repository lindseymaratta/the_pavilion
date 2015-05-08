$('#eventlist').gCalReader({

  // Public Google Calendar
  calendarId:'15mh12lei7b79t5i1v1atr6v54@group.calendar.google.com',

  // Google API KEY
  apiKey:'AIzaSyAVhU0GdCZQidylxz7whIln82rWtZ4cIDQ',

  // <a href="http://www.jqueryscript.net/time-clock/">date</a> format
  dateFormat: 'LongDate+ShortTime',

  // error message
  errorMsg: 'No events in calendar',

  // maximum events
  maxEvents: 100,

  // future-events filter
  futureEventsOnly: true,

  // descending sort order
  sortDescending: false

});