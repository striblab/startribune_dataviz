//SPEED WAGONS
var speed_wagons = omnivore.csv('calls/speed_wagons.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Speed Wagon</strong>');
        });
    });

speed_wagons.on('ready', function(e) {
clusterGroup37 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup37.addLayer(layer);
});
map.addLayer(clusterGroup37);
});

speed_wagons.on('mouseover', function(e) {
    e.layer.openPopup();
});
speed_wagons.on('mouseout', function(e) {
    e.layer.closePopup();
});