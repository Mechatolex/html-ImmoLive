// load
var map = L.map('map', { zoomControl: false }).setView([51.93993,11.42960], 18);
// create
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 15, maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate({setView: true, maxZoom: 18});

