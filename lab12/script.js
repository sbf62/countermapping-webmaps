
 mapboxgl.accessToken = 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q';
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/sbf62/cloczt3l300t301oz17kg69d8', // replace this with your style URL
    center: [37.775,-122.462], // The convention for coordinates is  typically [long, lat]
    zoom: 13,
    // maxZoom: 22,
    minZoom: 12
  });

    map.on('load',function(){
      // Give your layer's source a nickname you'll remember easily.
      map.addSource('sandyLayer',{
        'type':'vector',
        'url': 'mapbox://iamwfx.bpjzmy2b'
      });
  });

