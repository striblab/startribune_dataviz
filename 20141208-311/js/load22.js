//POTHOLES
var potholes = omnivore.csv('calls/potholes.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Pothole</strong>');
        });
    });

potholes.on('ready', function(e) {
clusterGroup24 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup24.addLayer(layer);
});
map.addLayer(clusterGroup24);
});

potholes.on('mouseover', function(e) {
    e.layer.openPopup();
});
potholes.on('mouseout', function(e) {
    e.layer.closePopup();
});