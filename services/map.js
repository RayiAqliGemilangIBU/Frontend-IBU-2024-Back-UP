// Initialize the map and set its view to a specific geographical point and zoom level
var map = L.map('map').setView([-77.8419, 166.6863], 8); // Coordinates for McMurdo Station, Antarctica

// Add a tile layer to the map (using MapTiler service)
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=xinj6wTWg04tHLy3VyQd', {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    crossOrigin: true
}).addTo(map);

// Add a marker to the map at the same location
var marker = L.marker([-77.8419, 166.6863]).addTo(map);

// Bind a popup to the marker with an embedded Google Maps iframe
marker.bindPopup("<iframe src='https://www.google.com/maps?q=-77.8419,166.6863&output=embed' width='200' height='150' frameborder='0' style='border:0' allowfullscreen></iframe>");
