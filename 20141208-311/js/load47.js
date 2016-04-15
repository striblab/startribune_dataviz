//GENERAL STREET COMPLAINTS
var general_street = omnivore.csv('calls/general_streets.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>General Street Issue</strong>');
        });
    });

general_street.on('ready', function(e) {
clusterGroup47 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup47.addLayer(layer);
});
map.addLayer(clusterGroup47);
});

general_street.on('mouseover', function(e) {
    e.layer.openPopup();
});
animal_livability.on('mouseout', function(e) {
    e.layer.closePopup();
});