$(document).ready(function() {
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: 'Old Lyme, CT',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+','+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      
      
      for(var i=0;i<3;i++) {
        html += '<p>'+weather.forecast[i].day+': '+weather.forecast[i].high+'</p>';
      }
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});