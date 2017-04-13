d3.json("./data/sites.json", function(error, dataLoad) {

var data = dataLoad.sites;

L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

          var mapBounds = new L.LatLngBounds(
              new L.LatLng(39.1982, -128.1445),
              new L.LatLng(50.5414, -68.2031));
          var mapMinZoom = 0;
          var mapMaxZoom = 11;

//Make the map object
var map = L.mapbox.map('map', 'mapbox.light').setView([45.9703, -94.1748], 7) 
.on('ready', function() {
      map.maxZoom = 8;
      map.minZoom = 11;
   });

//map.addControl(L.mapbox.geocoderControl('examples.map-i875kd35'));
//map.legendControl.addLegend(document.getElementById('legend').innerHTML);

//DARK SITE LOCATIONS
// 

var dark_sites = omnivore.csv('./data/sites.csv')
   // var dark_sites = omnivore.csv('data/dark_sites.txt')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#7C84AE',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup(marker.toGeoJSON().properties.site);
        });
    });

var clusterGroup;

dark_sites.on('ready', function(e) {
clusterGroup = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup.addLayer(layer);
});
map.addLayer(clusterGroup);
});

//dark_sites.addTo(map);

dark_sites.on('mouseover', function(e) {
    e.layer.openPopup();
});
dark_sites.on('mouseout', function(e) {
    e.layer.closePopup();
});

var blackmarble = L.tileLayer('http://jeffhargarten.com/interactives/stars/blackmarble/{z}/{x}/{y}.png', {
            minZoom: mapMinZoom, maxZoom: mapMaxZoom,
            bounds: mapBounds,
            opacity: 0.65
       });

//map.dragging.disable();
//map.touchZoom.disable();
//map.doubleClickZoom.disable();
//map.scrollWheelZoom.disable();


jQuery( document ).ready(function() {
       jQuery("#lights_toggle").css("background-color","#333");
       jQuery("#sites_toggle").css("background-color","#7C84AE");

jQuery('#lights_toggle input').on('change', function () {
    if (this.checked) {
       map.addLayer(blackmarble);
       jQuery("#lights_toggle").css("background-color","#7C84AE");
    } else {
       map.removeLayer(blackmarble);
       jQuery("#lights_toggle").css("background-color","#333");
    }
});
jQuery('#sites_toggle input').on('change', function () {
    if (this.checked) {
        map.addLayer(clusterGroup);
       jQuery("#sites_toggle").css("background-color","#7C84AE");
    } else {
        map.removeLayer(clusterGroup);
       jQuery("#sites_toggle").css("background-color","#333");
    }
});
});
});