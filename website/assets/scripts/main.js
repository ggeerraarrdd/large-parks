//
//
// Sources:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://stackoverflow.com/questions/47104164/call-function-initmap-with-parameters-in-gmaps-api
// https://stackoverflow.com/questions/44795264/add-double-quotes-to-string-which-is-stored-in-variable
//
//
// Initialize and add the map
var map;
var map_lat, map_lng, map_zoom, map_marker_title;

// Function to get map attributes safely
function getMapAttributes() {
  if (typeof window !== 'undefined' && document) {
    map_lat = parseFloat(document.getElementById('map')?.getAttribute("map-lat") || "0");
    map_lng = parseFloat(document.getElementById('map')?.getAttribute("map-lng") || "0");
    map_zoom = parseFloat(document.getElementById('map')?.getAttribute("map-zoom") || "10");
    map_marker_title = parseFloat(document.getElementById('map')?.getAttribute("map-marker-title") || "");
  }
}

var doubleQuote = ' " ';

async function initMap() {
  // Get attributes only when in browser
  getMapAttributes();
  
  // The location of Park
  var position = { lat: map_lat, lng: map_lng };
  // Request needed libraries.
  // @ts-expect-error
  var mapsLib = await google.maps.importLibrary("maps");
  var Map = mapsLib.Map;
  var markerLib = await google.maps.importLibrary("marker");
  var AdvancedMarkerView = markerLib.AdvancedMarkerView;
  
  // The map, centered at Park
  map = new Map(document.getElementById("map"), {
    zoom: map_zoom,
    center: position,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'satellite',
  });

  // The marker, positioned at Park
  var marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: doubleQuote + map_marker_title + doubleQuote,
  });
}

// Only run initMap in browser environment
if (typeof window !== 'undefined') {
  initMap();
}