//PERMITTED WORK
var permitted_work = omnivore.csv('calls/permitted_work.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Permitted Work</strong>');
        });
    });

permitted_work.on('ready', function(e) {
clusterGroup23 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup23.addLayer(layer);
});
map.addLayer(clusterGroup23);
});

permitted_work.on('mouseover', function(e) {
    e.layer.openPopup();
});
permitted_work.on('mouseout', function(e) {
    e.layer.closePopup();
});