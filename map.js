// initialize the map on the "map" div with a given center and zoom
/*var map = L.map('map', {
    center: [51.93900,11.42857],
    zoom: 16,
    zoomControl: false,
    watch: true,
}).locate({setView: true, maxZoom: 16})*/

var map = L.map("map", {
    center: [51.93900,11.42857],
    zoom: 18,
}).locate({setView: true});

// create
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 15, maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function onLocationFound(e) {
    map.locate({setView: true, watch: true, maxZoom: 18});
    L.marker(e.latlng).addTo(map).bindPopup("Deine Position").openPopup();
  };
  
function locationerror(e) {
    map.locate({setView: false, watch: false, maxZoom: 18});
}

  map.on('locationfound', onLocationFound);
  map.on("locationerror", locationerror);
  

