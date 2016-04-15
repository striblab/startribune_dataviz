//TRAFFIC SIGNAL NEW
var traffic_signal_new = omnivore.csv('calls/traffic_signal_new.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>New Traffic Signal</strong>');
        });
    });

traffic_signal_new.on('ready', function(e) {
clusterGroup41 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup41.addLayer(layer);
});
map.addLayer(clusterGroup41);
});

traffic_signal_new.on('mouseover', function(e) {
    e.layer.openPopup();
});
traffic_signal_new.on('mouseout', function(e) {
    e.layer.closePopup();
});