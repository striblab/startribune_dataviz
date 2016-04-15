//RCC TENANTS
var rcc_2 = omnivore.csv('calls/rcc_2.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Residential Conditions - HOD</strong>');
        });
    });

rcc_2.on('ready', function(e) {
clusterGroup26 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup26.addLayer(layer);
});
map.addLayer(clusterGroup26);
});

rcc_2.on('mouseover', function(e) {
    e.layer.openPopup();
});
rcc_2.on('mouseout', function(e) {
    e.layer.closePopup();
});
