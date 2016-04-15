//STREET LIGHTS
var street_lights = omnivore.csv('calls/street_lights.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Street Light</strong>');
        });
    });

street_lights.on('ready', function(e) {
clusterGroup39 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup39.addLayer(layer);
});
map.addLayer(clusterGroup39);
});

street_lights.on('mouseover', function(e) {
    e.layer.openPopup();
});
street_lights.on('mouseout', function(e) {
    e.layer.closePopup();
});