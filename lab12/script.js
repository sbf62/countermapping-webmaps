
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
      '50', '#3b528b',
      '51', '#3b528b',
      '52', '#3b528b',
      '53', '#3b528b',
      '54', '#3b528b',
      '55', '#3b528b',
      '56', '#3b528b',
      '57', '#3b528b',
      '58', '#3b528b',
      '59', '#3b528b',
      '60', '#21908d',
      '61', '#21908d',
      '62', '#21908d',
      '63', '#21908d',
      '64', '#21908d',
      '65', '#21908d',
      '66', '#21908d',
      '67', '#21908d',
      '68', '#21908d',
      '69', '#21908d',
      '70', '#5dc963',
      '71', '#5dc963',
      '72', '#5dc963',
      '73', '#5dc963',
      '74', '#5dc963',
      '75', '#5dc963',
      '76', '#5dc963',
      '77', '#5dc963',
      '78', '#5dc963',
      '79', '#5dc963',
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



