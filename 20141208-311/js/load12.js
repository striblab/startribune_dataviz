//FENCE MAINTENANCE
var fence_maintainance = omnivore.csv('calls/fence_maintainance.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Fence Maintenance</strong>');
        });
    });

fence_maintainance.on('ready', function(e) {
clusterGroup13 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup13.addLayer(layer);
});
map.addLayer(clusterGroup13);
});

fence_maintainance.on('mouseover', function(e) {
    e.layer.openPopup();
});
fence_maintainance.on('mouseout', function(e) {
    e.layer.closePopup();
});