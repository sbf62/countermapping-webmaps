mapboxgl.accessToken = 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q';

// Initialize Map 1
const map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u', // Replace with your Mapbox style URL
    center: [-73.981,40.700], // Set initial map center
    zoom: 8.75 // Set initial map zoom level
});

// Initialize Map 2
const map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u', // Replace with your Mapbox style URL
    center: [4.91,52.373], // Set initial map center
    zoom: 9.5 // Set initial map zoom level
});

// Initialize Map 3
const map3 = new mapboxgl.Map({
    container: 'map3',
    style: 'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u', // Replace with your Mapbox style URL
    center: [-73.981,40.700], // Set initial map center
    zoom: 8.75 // Set initial map zoom level
});

// Initialize Map 4
const map4 = new mapboxgl.Map({
    container: 'map4',
    style: 'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u', // Replace with your Mapbox style URL
    center: [4.91,52.373], // Set initial map center
    zoom: 9.5 // Set initial map zoom level
});

// Add map controls, layers, etc. based on your needs
// Refer to Mapbox documentation for customization options
