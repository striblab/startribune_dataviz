//SIDEWALK STRUCTURAL
var sidewalk_structural = omnivore.csv('calls/sidewalk_structural.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Sidewalk Structural Issue</strong>');
        });
    });

sidewalk_structural.on('ready', function(e) {
clusterGroup32 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup32.addLayer(layer);
});
map.addLayer(clusterGroup32);
});

sidewalk_structural.on('mouseover', function(e) {
    e.layer.openPopup();
});
sidewalk_structural.on('mouseout', function(e) {
    e.layer.closePopup();
});