//ILLEGAL DUMPING
var illegal_dumping = omnivore.csv('calls/illegal_dumping.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Illegal Dumping</strong>');
        });
    });

illegal_dumping.on('ready', function(e) {
clusterGroup17 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup17.addLayer(layer);
});
map.addLayer(clusterGroup17);
});

illegal_dumping.on('mouseover', function(e) {
    e.layer.openPopup();
});
illegal_dumping.on('mouseout', function(e) {
    e.layer.closePopup();
});