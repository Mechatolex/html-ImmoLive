function onLocationFound(e) {
    const autorefresh=({intervall=10000,}) => {
        const execute = () => {
            setTimeout(execute, intervall);
            L.marker(e.latlng).addTo(map) 
        };
        execute();
    };  
}
function onLocationError(e) {
    alert(e.message);
}
map.on('locationerror', onLocationError);
map.on('locationfound', onLocationFound);




