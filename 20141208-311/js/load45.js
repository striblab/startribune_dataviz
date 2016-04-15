//URGENT POLLUTION
var urgent_pollution = omnivore.csv('calls/urgent_pollution.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Urgent Pollution</strong>');
        });
    });

urgent_pollution.on('ready', function(e) {
clusterGroup46 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup46.addLayer(layer);
});
map.addLayer(clusterGroup46);
});

urgent_pollution.on('mouseover', function(e) {
    e.layer.openPopup();
});
urgent_pollution.on('mouseout', function(e) {
    e.layer.closePopup();
});