//BIKE LANES
var bike_lanes = omnivore.csv('calls/bike_lanes.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Bike Lane</strong>');
        });
    });

bike_lanes.on('ready', function(e) {
clusterGroup6 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup6.addLayer(layer);
});
map.addLayer(clusterGroup6);
});

bike_lanes.on('mouseover', function(e) {
    e.layer.openPopup();
});
bike_lanes.on('mouseout', function(e) {
    e.layer.closePopup();
});
