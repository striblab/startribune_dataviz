//PARKING
var parking = omnivore.csv('calls/parking.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Parking</strong>');
        });
    });

parking.on('ready', function(e) {
clusterGroup22 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup22.addLayer(layer);
});
map.addLayer(clusterGroup22);
});

parking.on('mouseover', function(e) {
    e.layer.openPopup();
});
parking.on('mouseout', function(e) {
    e.layer.closePopup();
});