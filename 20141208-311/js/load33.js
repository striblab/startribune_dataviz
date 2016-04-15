//SNOW ILLEGAL DUMPING
var snow_illegal_dumping = omnivore.csv('calls/snow_illegal_dumping.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Illegal Snow Dumping</strong>');
        });
    });

snow_illegal_dumping.on('ready', function(e) {
clusterGroup35 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup35.addLayer(layer);
});
map.addLayer(clusterGroup35);
});

snow_illegal_dumping.on('mouseover', function(e) {
    e.layer.openPopup();
});
snow_illegal_dumping.on('mouseout', function(e) {
    e.layer.closePopup();
});