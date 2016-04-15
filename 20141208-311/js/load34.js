//SPECIAL SWEEPING
var special_sweeping = omnivore.csv('calls/special_sweeping.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Special Sweeping</strong>');
        });
    });

special_sweeping.on('ready', function(e) {
clusterGroup36 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup36.addLayer(layer);
});
map.addLayer(clusterGroup36);
});

special_sweeping.on('mouseover', function(e) {
    e.layer.openPopup();
});
special_sweeping.on('mouseout', function(e) {
    e.layer.closePopup();
});