mapboxgl.accessToken = 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q';

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u', // You can use your own Mapbox style
    center: [-74.5, 40], // Set initial map center
    zoom: 9 // Set initial map zoom level
});

// Add map controls, layers, etc. based on your needs
// Refer to Mapbox documentation for customization options
