//LICENSING
var licensing = omnivore.csv('calls/licensing.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Licensing</strong>');
        });
    });

licensing.on('ready', function(e) {
clusterGroup19 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup19.addLayer(layer);
});
map.addLayer(clusterGroup19);
});

licensing.on('mouseover', function(e) {
    e.layer.openPopup();
});
licensing.on('mouseout', function(e) {
    e.layer.closePopup();
});