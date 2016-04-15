//EMERGENCY POLLUTION
var emergency_pollution = omnivore.csv('calls/emergency_pollution.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Emergency Pollution</strong>');
        });
    });

emergency_pollution.on('ready', function(e) {
clusterGroup12 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup12.addLayer(layer);
});
map.addLayer(clusterGroup12);
});

emergency_pollution.on('mouseover', function(e) {
    e.layer.openPopup();
});
emergency_pollution.on('mouseout', function(e) {
    e.layer.closePopup();
});