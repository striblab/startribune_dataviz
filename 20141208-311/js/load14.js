//GRAFFITI
var graffiti = omnivore.csv('calls/graffiti.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Graffiti</strong>');
        });
    });

graffiti.on('ready', function(e) {
clusterGroup15 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup15.addLayer(layer);
});
map.addLayer(clusterGroup15);
});

graffiti.on('mouseover', function(e) {
    e.layer.openPopup();
});
graffiti.on('mouseout', function(e) {
    e.layer.closePopup();
});