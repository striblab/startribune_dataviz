//NOISE POLLUTION
var noise_pollution = omnivore.csv('calls/noise_pollution.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Noise Pollution</strong>');
        });
    });

noise_pollution.on('ready', function(e) {
clusterGroup21 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup21.addLayer(layer);
});
map.addLayer(clusterGroup21);
});

noise_pollution.on('mouseover', function(e) {
    e.layer.openPopup();
});
noise_pollution.on('mouseout', function(e) {
    e.layer.closePopup();
});