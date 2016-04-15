//TREES DOWN
var trees_down = omnivore.csv('calls/trees_down.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Trees Down</strong>');
        });
    });

trees_down.on('ready', function(e) {
clusterGroup44 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup44.addLayer(layer);
});
map.addLayer(clusterGroup44);
});

trees_down.on('mouseover', function(e) {
    e.layer.openPopup();
});
trees_down.on('mouseout', function(e) {
    e.layer.closePopup();
});