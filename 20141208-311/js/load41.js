//TRAFFIC SIGNAL TROUBLE
var traffic_signal_trouble = omnivore.csv('calls/traffic_signal_trouble.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Traffic Signal Trouble</strong>');
        });
    });

traffic_signal_trouble.on('ready', function(e) {
clusterGroup43 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup43.addLayer(layer);
});
map.addLayer(clusterGroup43);
});

traffic_signal_trouble.on('mouseover', function(e) {
    e.layer.openPopup();
});
traffic_signal_trouble.on('mouseout', function(e) {
    e.layer.closePopup();
});