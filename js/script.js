window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("header").className = "test";
  }else{
    document.getElementById("header").className = "navbar navbar-inverse";
  }
}

function init_map() {
var var_location = new google.maps.LatLng(22.7229, 75.8845);

var var_mapoptions = {
		center: var_location,
		zoom: 14
};

var var_marker = new google.maps.Marker({
	position: var_location,
	map: var_map,
	title:"Digital Marketing Pvt. Ltd."});

var var_map = new google.maps.Map(document.getElementById("map"),
	var_mapoptions);

var_marker.setMap(var_map);	
}
google.maps.event.addDomListener(window, 'load', init_map);

