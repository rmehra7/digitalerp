window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("header").className = "test";
  }else{
    document.getElementById("header").className = "navbar navbar-inverse";
  }
}

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(22.7229, 75.8845),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
      }

// function initialize() {
// var var_location = new google.maps.LatLng(22.7229, 75.8845);

// var var_mapoptions = {
// 		center: var_location,
// 		zoom: 14
// }

// var var_marker = new google.maps.Marker({
// 	position: var_location,
// 	map: var_map,
// 	title:"Digital Marketing Pvt. Ltd."});

// var var_map = new google.maps.Map(document.getElementById("map"),
// 	var_mapoptions);

// var_marker.setMap(var_map);	
// }


