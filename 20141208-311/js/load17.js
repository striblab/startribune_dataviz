//LAND POLLUTION
var land_pollution = omnivore.csv('calls/land_pollution.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Land Pollution</strong>');
        });
    });

land_pollution.on('ready', function(e) {
clusterGroup18 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup18.addLayer(layer);
});
map.addLayer(clusterGroup18);
});

land_pollution.on('mouseover', function(e) {
    e.layer.openPopup();
});
land_pollution.on('mouseout', function(e) {
    e.layer.closePopup();
});