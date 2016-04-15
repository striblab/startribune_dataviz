//RESIDENTIAL DISABILITY ZONES
var residential_disability_zone = omnivore.csv('calls/residential_disability_zone.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Residential Conditions - Tenant Complaint</strong>');
        });
    });

residential_disability_zone.on('ready', function(e) {
clusterGroup27 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup27.addLayer(layer);
});
map.addLayer(clusterGroup27);
});

residential_disability_zone.on('mouseover', function(e) {
    e.layer.openPopup();
});
residential_disability_zone.on('mouseout', function(e) {
    e.layer.closePopup();
});