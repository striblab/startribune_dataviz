//UNPERMITTED WORK
var unpermitted_work = omnivore.csv('calls/unpermitted_work.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Unpermitted Work</strong>');
        });
    });

unpermitted_work.on('ready', function(e) {
clusterGroup45 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup45.addLayer(layer);
});
map.addLayer(clusterGroup45);
});

unpermitted_work.on('mouseover', function(e) {
    e.layer.openPopup();
});
unpermitted_work.on('mouseout', function(e) {
    e.layer.closePopup();
});