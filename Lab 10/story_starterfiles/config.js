var config = {
    style: 'mapbox://styles/sbf62/clo31unb000d601qxah9uampw',
    accessToken: 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: '',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [

        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Background',
            image: '',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.96295, 40.65619],
                zoom: 11.8,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 0 
            }],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Housing',
            image: 'https://thebridgebk.com/wp-content/uploads/2017/10/121029_5267-1024x683.jpg',
            description: 'Red Hook Houses are the largest housing development in all of Brooklyn, New York. During hurricane Sandy, this area became innundated with around 6 ft of water from sewer overflows and high tides. This left many damages including leaks and mold in the housing development. Residents were also left without acess to energy or freash water for months.',
            location: {
                center: [-74.00778, 40.67630],
                zoom: 15.7,
                pitch: 50,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 1
            }
            ],
            onChapterExit: []
        },
 
    ]
};
