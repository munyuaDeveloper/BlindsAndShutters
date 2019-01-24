

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}
// 
//   const y = document.getElementById("register-btn");

//   y.addEventListener('click', () => {
//   var email = getElementById("email").value;
//     var pass = getElementById("pass").value;
//     var retype_pass = getElementById("pwd").value;
//     if (pass===retype_pass) {
//       alert ("You Are Registered Successfyl!");
//     }else{
//        alert ("Password does not match!");
//     }

// });

  // function register() {
  //   var email = getElementById("email").value;
  //   var pass = getElementById("pass").value;
  //   var retype_pass = getElementById("pwd").value;
  //   if (pass===retype_pass) {
  //     alert ("You Are Registered Successfyl!");
  //   }else{
  //      alert ("Password does not match!");
  //   }
     
  // }
  document.getElementById("register-btn").addEventListener("click",register);
  function register() {
    var email = getElementById("email").value;
    var pass = getElementById("pass").value;
    var retype_pass = getElementById("pwd").value;
    if (pass!==retype_pass) {
      alert ("You Are Registered Successful!");
    }else{
       alert ("Password does not match!");
    }
     
  }

document.getElementById("login-btn").addEventListener("click", login);

function login() {
    alert ("You logged in Successfyl!");
}


var loc =document.getElementById("location");

loc.addEventListener('click', () => {
	var longitude = prompt("Enter the longitude of your location");
	var latitude = prompt("Enter the latitude of your location");
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
	center: new google.maps.LatLng(longitude, latitude), zoom: 10
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

});

// function myMap() {
// 	var longitude = prompt("Enter the longitude of your location");
// 	var latitude = prompt("Enter the latitude of your location");
// 	var mapCanvas = document.getElementById("map");
// 	var mapOptions = {
// 	center: new google.maps.LatLng(longitude, latitude), zoom: 10
// 	};
// 	var map = new google.maps.Map(mapCanvas, mapOptions);
// }
// </script>

// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>