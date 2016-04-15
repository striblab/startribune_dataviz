//ANIMAL LIVABILITY
var animal_livability = omnivore.csv('calls/animal-livability.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Animal Livability</strong>');
        });
    });

animal_livability.on('ready', function(e) {
clusterGroup5 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup5.addLayer(layer);
});
map.addLayer(clusterGroup5);
});

animal_livability.on('mouseover', function(e) {
    e.layer.openPopup();
});
animal_livability.on('mouseout', function(e) {
    e.layer.closePopup();
});