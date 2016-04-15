//SNOW AND ICE
var snow_ice = omnivore.csv('calls/snow_ice.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Snow and Ice</strong>');
        });
    });

snow_ice.on('ready', function(e) {
clusterGroup34 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup34.addLayer(layer);
});
map.addLayer(clusterGroup34);
});

snow_ice.on('mouseover', function(e) {
    e.layer.openPopup();
});
snow_ice.on('mouseout', function(e) {
    e.layer.closePopup();
});