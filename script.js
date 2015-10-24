jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/7e88ea1079d403a5/geolookup/conditions/q/autoip.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  document.getElementById("log").innerHTML =("Current temperature in " + location + " is ");
document.getElementById("temp").innerHTML =(temp_f);
  }
  });
});
