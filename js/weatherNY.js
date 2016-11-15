// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    woeid: '2357536', //2357536
    location: 'New York, NY',
    unit: 'F',
    success: function(weather) {
      html = '<ul><li>Today in '+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>High of '+weather.temp+'&deg;F</li></ul>';
      
        for(var i=1;i<7;i++) {
        html += '<p id="fcstList">&nbsp &nbsp'+weather.forecast[i].day+':   '+weather.forecast[i].high+'&deg;F</p>';
        }
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
