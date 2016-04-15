//SPORTS EQUIPMENT
var sport_equipment = omnivore.csv('calls/sports_equipment.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Newspaper Box</strong>');
        });
    });

sport_equipment.on('ready', function(e) {
clusterGroup38 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup38.addLayer(layer);
});
map.addLayer(clusterGroup38);
});

sport_equipment.on('mouseover', function(e) {
    e.layer.openPopup();
});
sport_equipment.on('mouseout', function(e) {
    e.layer.closePopup();
});