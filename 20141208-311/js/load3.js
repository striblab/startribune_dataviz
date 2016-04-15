//AIR POLLUTION
var air_pollution = omnivore.csv('calls/air_pollution.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Air Pollution</strong>');
        });
    });

air_pollution.on('ready', function(e) {
clusterGroup3 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup3.addLayer(layer);
});
map.addLayer(clusterGroup3);
});

air_pollution.on('mouseover', function(e) {
    e.layer.openPopup();
});
air_pollution.on('mouseout', function(e) {
    e.layer.closePopup();
});