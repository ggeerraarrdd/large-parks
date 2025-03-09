//
//
// Sources:
// https://developers.google.com/maps/documentation/javascript/adding-a-google-map
// https://stackoverflow.com/questions/47104164/call-function-initmap-with-parameters-in-gmaps-api
// https://stackoverflow.com/questions/44795264/add-double-quotes-to-string-which-is-stored-in-variable
//
//
// Initialize and add the map
let map;
let map_lat = parseFloat(document.getElementById('map').getAttribute("map-lat"));
let map_lng = parseFloat(document.getElementById('map').getAttribute("map-lng"));
let map_zoom = parseFloat(document.getElementById('map').getAttribute("map-zoom"));
let map_marker_title = parseFloat(document.getElementById('map').getAttribute("map-marker-title"));
let doubleQuote = ' " ';

async function initMap() {
  // The location of Park
  const position = { lat: map_lat, lng: map_lng };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Park
  map = new Map(document.getElementById("map"), {
    zoom: map_zoom,
    center: position,
    mapId: "DEMO_MAP_ID",
    mapTypeId: 'satellite',
  });

  // The marker, positioned at Park
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: doubleQuote + map_marker_title + doubleQuote,
  });
}

initMap();
