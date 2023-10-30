
mapbox://mapbox://styles/sbf62/cloczt3l300t301oz17kg69d8

mapboxgl.accessToken = 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q';

const map = new mapboxgl.Map({
container: 'Stella',
style: 'mapbox://styles/sbf62/cloczt3l300t301oz17kg69d8',
center:[-122.429, 37.772],
zoom: 13,
pitch: 25.49,
bearing:0.0
});

map.on('load', function () {
	map.addSource('resturantSource',{
		'type':'vector',
		'url': 'mapbox://sbf62.2p6hdvcm'
	});
map.addLayer({
	'id': 'resturantLayer',
	'type': 'circle',
	'source': 'resturantSource',
	'source-layer' : 'Restaurant_Scores_-_LIVES_Sta-8z5cme',
	'paint':{
		'circle-color':'#008F8C'
	}

})

})



