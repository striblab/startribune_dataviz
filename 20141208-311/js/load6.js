//BRIDGES
var bridges = omnivore.csv('calls/bridges.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Bridge</strong>');
        });
    });

bridges.on('ready', function(e) {
clusterGroup7 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup7.addLayer(layer);
});
map.addLayer(clusterGroup7);
});

bridges.on('mouseover', function(e) {
    e.layer.openPopup();
});
bridges.on('mouseout', function(e) {
    e.layer.closePopup();
});