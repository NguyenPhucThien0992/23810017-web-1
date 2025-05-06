var lonLat = [106.68283, 10.7578];
var map = new ol.Map({
  target: "map",
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat(lonLat),
    zoom: 15,
  }),
});

// Add marker
var marker = new ol.Feature({
  geometry: new ol.geom.Point(ol.proj.fromLonLat(lonLat)),
});

marker.setStyle(
  new ol.style.Style({
    image: new ol.style.Icon({
      crossOrigin: "anonymous",
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/svgs/solid/location-dot.svg",
    }),
  })
);

var vectorSource = new ol.source.Vector({
  features: [marker],
});

var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});

map.addLayer(markerVectorLayer);
