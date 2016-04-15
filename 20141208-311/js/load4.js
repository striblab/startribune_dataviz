//ANIMAL PUBLIC HEALTH
var animal_health = omnivore.csv('calls/animal-health.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Animal Public Health</strong>');
        });
    });

animal_health.on('ready', function(e) {
clusterGroup4 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup4.addLayer(layer);
});
map.addLayer(clusterGroup4);
});

animal_health.on('mouseover', function(e) {
    e.layer.openPopup();
});
animal_health.on('mouseout', function(e) {
    e.layer.closePopup();
});