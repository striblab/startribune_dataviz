//ABANDONED BIKES
var abandoned_bikes = omnivore.csv('calls/abandoned_bikes.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Abandoned Bike</strong>');
        });
    });

abandoned_bikes.on('ready', function(e) {
clusterGroup1 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup1.addLayer(layer);
});
map.addLayer(clusterGroup1);
});

abandoned_bikes.on('mouseover', function(e) {
    e.layer.openPopup();
});
abandoned_bikes.on('mouseout', function(e) {
    e.layer.closePopup();
});