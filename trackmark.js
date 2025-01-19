function onLocationFound(e) {
    L.marker(e.latlng).addTo(map)   
}
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
map.on('locationfound', onLocationFound);




