//SAND BARRELS
var sand_barrels = omnivore.csv('calls/sand_barrels.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Sand Barrel</strong>');
        });
    });

sand_barrels.on('ready', function(e) {
clusterGroup28 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup28.addLayer(layer);
});
map.addLayer(clusterGroup28);
});

sand_barrels.on('mouseover', function(e) {
    e.layer.openPopup();
});
sand_barrels.on('mouseout', function(e) {
    e.layer.closePopup();
});