//NEWSPAPER BOXES
var newspaper_boxes = omnivore.csv('calls/newspaper_boxes.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Newspaper Box</strong>');
        });
    });

newspaper_boxes.on('ready', function(e) {
clusterGroup20 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup20.addLayer(layer);
});
map.addLayer(clusterGroup20);
});

newspaper_boxes.on('mouseover', function(e) {
    e.layer.openPopup();
});
newspaper_boxes.on('mouseout', function(e) {
    e.layer.closePopup();
});