//HYDRANTS
var hydrants = omnivore.csv('calls/hydrants.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Hydrants</strong>');
        });
    });

hydrants.on('ready', function(e) {
clusterGroup16 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup16.addLayer(layer);
});
map.addLayer(clusterGroup16);
});

hydrants.on('mouseover', function(e) {
    e.layer.openPopup();
});
hydrants.on('mouseout', function(e) {
    e.layer.closePopup();
});