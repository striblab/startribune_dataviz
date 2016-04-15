//TRAFFIC SIGNAL TIMING
var traffic_signal_timing = omnivore.csv('calls/traffic_signal_timing.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Traffic Signal Timing Issue</strong>');
        });
    });

traffic_signal_timing.on('ready', function(e) {
clusterGroup42 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup42.addLayer(layer);
});
map.addLayer(clusterGroup42);
});

traffic_signal_timing.on('mouseover', function(e) {
    e.layer.openPopup();
});
traffic_signal_timing.on('mouseout', function(e) {
    e.layer.closePopup();
});
