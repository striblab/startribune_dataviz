//DEBRIS
var debris = omnivore.csv('calls/debris.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Debris</strong>');
        });
    });

debris.on('ready', function(e) {
clusterGroup11 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup11.addLayer(layer);
});
map.addLayer(clusterGroup11);
});

debris.on('mouseover', function(e) {
    e.layer.openPopup();
});
debris.on('mouseout', function(e) {
    e.layer.closePopup();
});