//COMMERCIAL STRUCTURE UNSOUND
var commercial_structure_unsound = omnivore.csv('calls/commercial_structure_unsound.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Commercial Structure Unsound</strong>');
        });
    });

commercial_structure_unsound.on('ready', function(e) {
clusterGroup10 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup10.addLayer(layer);
});
map.addLayer(clusterGroup10);
});

commercial_structure_unsound.on('mouseover', function(e) {
    e.layer.openPopup();
});
commercial_structure_unsound.on('mouseout', function(e) {
    e.layer.closePopup();
});