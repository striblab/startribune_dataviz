//ABANDONED VEHICLES
var abandoned_vehicles = omnivore.csv('calls/abandoned_vehicle.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Abandoned Vehicle</strong>');
        });
    });

abandoned_vehicles.on('ready', function(e) {
clusterGroup2 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup2.addLayer(layer);
});
map.addLayer(clusterGroup2);
});

abandoned_vehicles.on('mouseover', function(e) {
    e.layer.openPopup();
});
abandoned_vehicles.on('mouseout', function(e) {
    e.layer.closePopup();
});

//map.addLayer(clusterGroup2);