//SIDEWALK SNOW
var sidewalk_snow = omnivore.csv('calls/sidewalk_snow.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Sidewalk Snow</strong>');
        });
    });

sidewalk_snow.on('ready', function(e) {
clusterGroup31 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup31.addLayer(layer);
});
map.addLayer(clusterGroup31);
});

sidewalk_snow.on('mouseover', function(e) {
    e.layer.openPopup();
});
sidewalk_snow.on('mouseout', function(e) {
    e.layer.closePopup();
});