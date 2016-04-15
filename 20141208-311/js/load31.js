//SIGNS
var signs = omnivore.csv('calls/signs.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Sign</strong>');
        });
    });

signs.on('ready', function(e) {
clusterGroup33 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup33.addLayer(layer);
});
map.addLayer(clusterGroup33);
});

signs.on('mouseover', function(e) {
    e.layer.openPopup();
});
signs.on('mouseout', function(e) {
    e.layer.closePopup();
});