
mapbox://mapbox://styles/sbf62/cloczt3l300t301oz17kg69d8

mapboxgl.accessToken = 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q';

const map = new mapboxgl.Map({
container: 'Stella',
style: 'mapbox://styles/sbf62/clohirrt3001l01qs29dj7ji6',
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
		'circle-color':[
      'match',
    ['get', 'inspection_score'],
      '45', '#440154',
      '46', '#440154',
      '47', '#440154',
      '48', '#440154',
      '49', '#440154',
      '50', '#440154',
      '51', '#440154',
      '52', '#440154',
      '53', '#440154',
      '54', '#440154',
      '55', '#440154',
      '56', '#440154',
      '57', '#440154',
      '58', '#440154',
      '59', '#440154',
      '60', '#440154',
      '61', '#440154',
      '62', '#440154',
      '63', '#440154',
      '64', '#440154',
      '65', '#440154',
      '66', '#440154',
      '67', '#440154',
      '68', '#440154',
      '69', '#440154',
      '70', '#440154',
      '71', '#440154',
      '72', '#440154',
      '73', '#440154',
      '74', '#440154',
      '75', '#440154',
      '76', '#440154',
      '77', '#440154',
      '78', '#440154',
      '79', '#440154',
      '80', '#3b528b',
      '81', '#3b528b',
      '82', '#3b528b',
      '83', '#3b528b',
      '84', '#3b528b',
      '85', '#21908d',
      '86', '#21908d',
      '87', '#21908d',
      '88', '#21908d',
      '89', '#21908d',
      '90', '#5dc963',
      '91', '#5dc963',
      '92', '#5dc963',
      '93', '#5dc963',
      '94', '#5dc963',
      '95', '#fde725',
      '96', '#fde725',
      '97', '#fde725',
      '98', '#fde725',
      '99', '#fde725',
      '100', '#fde725',
      '#808080' // Default color for scores that don't match any case
    ]
	}

})

map.on('mouseenter', 'resturantLayer', (e) => {
        //console.log(e.features[0]['properties']['business_name']);
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
		textField.innerHTML = name;
    })

})



