//RCC
var rcc_1 = omnivore.csv('calls/rcc_1.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Residential Conditions</strong>');
        });
    });

rcc_1.on('ready', function(e) {
clusterGroup25 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup25.addLayer(layer);
});
map.addLayer(clusterGroup25);
});

rcc_1.on('mouseover', function(e) {
    e.layer.openPopup();
});
rcc_1.on('mouseout', function(e) {
    e.layer.closePopup();
});