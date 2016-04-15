//SUSPICIOUS ACTIVITY
var suspicious_activity = omnivore.csv('calls/suspicious_activity.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Suspicious Activity</strong>');
        });
    });

suspicious_activity.on('ready', function(e) {
clusterGroup40 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup40.addLayer(layer);
});
map.addLayer(clusterGroup40);
});

suspicious_activity.on('mouseover', function(e) {
    e.layer.openPopup();
});
suspicious_activity.on('mouseout', function(e) {
    e.layer.closePopup();
});