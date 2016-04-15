//SEWERS
var sewers = omnivore.csv('calls/sewers.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Sewer</strong>');
        });
    });

sewers.on('ready', function(e) {
clusterGroup29 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup29.addLayer(layer);
});
map.addLayer(clusterGroup29);
});

sewers.on('mouseover', function(e) {
    e.layer.openPopup();
});
sewers.on('mouseout', function(e) {
    e.layer.closePopup();
});