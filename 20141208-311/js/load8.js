//COMMERCIAL FOOD SAFETY
var commercial_food_safety = omnivore.csv('calls/commercial_food_safety.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Commercial Food Safety</strong>');
        });
    });

commercial_food_safety.on('ready', function(e) {
clusterGroup9 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup9.addLayer(layer);
});
map.addLayer(clusterGroup9);
});

commercial_food_safety.on('mouseover', function(e) {
    e.layer.openPopup();
});
commercial_food_safety.on('mouseout', function(e) {
    e.layer.closePopup();
});