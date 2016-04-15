//SIDEWALK OBSTRUCTION
var sidewalk_obstruction = omnivore.csv('calls/sidewalk_obstruction.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Sidewalk Obstruction</strong>');
        });
    });

sidewalk_obstruction.on('ready', function(e) {
clusterGroup30 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup30.addLayer(layer);
});
map.addLayer(clusterGroup30);
});

sidewalk_obstruction.on('mouseover', function(e) {
    e.layer.openPopup();
});
sidewalk_obstruction.on('mouseout', function(e) {
    e.layer.closePopup();
});