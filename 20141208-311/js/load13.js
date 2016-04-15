//FIRE HYDRANT SNOW
var fire_hydrant_snow = omnivore.csv('calls/fire_hydrant_snow.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Fire Hydrant Snow</strong>');
        });
    });

fire_hydrant_snow.on('ready', function(e) {
clusterGroup14 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup14.addLayer(layer);
});
map.addLayer(clusterGroup14);
});

fire_hydrant_snow.on('mouseover', function(e) {
    e.layer.openPopup();
});
fire_hydrant_snow.on('mouseout', function(e) {
    e.layer.closePopup();
});