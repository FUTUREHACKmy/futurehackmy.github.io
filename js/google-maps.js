// function initialise() {
//
//     var mapCanvas = document.getElementById('about-map');
//
//     // Creating an object literal containing the properties we want to pass to the map
//     var mapOptions = {
//         center: new google.maps.LatLng(3.0540657,101.7866805),
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         scrollwheel: false,
//         zoom: 15
//     };
//
//     // Calling the constructor, thereby initialising the map
//     var map = new google.maps.Map(mapCanvas, mapOptions);
//
//     // Define marker properties.
//     var markerImage = new google.maps.MarkerImage('images/Map Marker.png',
//         // This marker is 129 pixels wide by 42 pixels tall
//         new google.maps.Size(40,65),
//         // The origin for this image is 0,0
//         new google.maps.Point(0,0),
//         // The anchor for this image is the base of the flagpole at 18,42
//         new google.maps.Point(18,42)
//     );
//
//     // Add marker
//     var marker = new google.maps.Marker({
//         icon: markerImage,
//         position: new google.maps.LatLng(3.0540657,101.7866805),
//         map: map
//     });
//
//     // Add listener for a click on the pin
//     google.maps.event.addListener(marker, 'click', function() {
//         infoWindow.open(map, marker);
//     });
//
//     // Add information window content
//     var contentString = '<div id="infowindow">'+
//             '<strong>TRENDware</strong>'+
//             '<br>'+
//             '7-1, 1st Floor,'+
//             '<br>'+
//             'Jalan Temenggung 21/9,'+
//             '<br>'+
//             'Bandar Mahkota Cheras,'+
//             '<br>'+
//             '43200 Cheras 9 Miles,'+
//             '<br>'+
//             'Selangor';
//
//     // Add information window
//     var infoWindow = new google.maps.InfoWindow({
//         content: contentString
//     });
//
//     google.maps.event.addDomListener(window, "resize", function() {
//         var center = map.getCenter();
//         google.maps.event.trigger(map, "resize");
//         map.setCenter(center);
//     });
// }
// google.maps.event.addDomListener(window, 'load', initialise);

function initMap() {
  var TRENDware = {lat: 3.0540657, lng: 101.7866805};
  var map = new google.maps.Map(document.getElementById('about-map'), {
    zoom: 18,
    center: TRENDware
  });

  //Define marker properties.
  var markerImage = new google.maps.MarkerImage('img/marker.png',
  // This marker is 150 pixels wide by 70 pixels tall
  new google.maps.Size(150,70),
  //The origin of the marker is 0,0
  new google.maps.Point(0,0),

);

  var marker = new google.maps.Marker({
    icon: markerImage,
    position: TRENDware,
    map: map
  });

  //Add listener for a click on the pin
  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });

  // Add information window content
  var contentString = '<div id="infowindow">'+
                      '<strong>TRENDware</strong>'+
                      '<br>'+
                      '7-1, 1st Floor,'+
                      '<br>'+
                      'Jalan Temenggung 21/9,'+
                      '<br>'+
                      'Bandar Mahkota Cheras,'+
                      '<br>'+
                      '43200 Cheras 9 Miles,'+
                      '<br>'+
                      'Selangor';

  // Add information window
  var infoWindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
  });
}
