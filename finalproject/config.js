var config = {
    style:  'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u',
    accessToken: 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Housing Crises Across the World',
    subtitle: 'New York City v Amsterdam',
    byline: '',

    para1:'While both New York City and Amsterdam share the common goal of addressing housing challenges, their approaches can sometimes clash due to differences in their policy frameworks, cultural contexts, and economic models. This website aims to compare NYCHA housing in NYC to Social Housing in Amsterdam. Here are a few areas where their approaches may diverge:',
	para2:'Allocation Method -',
	para3: 'Amsterdam has a centralized allocation system, while NYCHA housing operates through decentralized developments.',
	para4: 'Income Criteria -',
	para5: 'Both programs use income criteria, but the specific thresholds and calculations may differ. The standardized 30% of adjusted gross income used by NYCHA provides consistency across its housing developments, simplifying the rent calculation process and ensuring a uniform approach. While both cities use a percentage of income to calculate rent, Amsterdam may provide more flexibility in the specific percentage applied, allowing for variations based on local policies and housing association guidelines.',
	para6: 'Housing Options -',
	para7: 'Social housing in Amsterdam includes a range of housing options, from apartments to family homes, catering to various household sizes and needs. Whereas NYCHA provides housing in the form of large-scale apartment complexes, with the aim of addressing the demand for affordable housing in various neighborhoods.',
	para8: 'Now lets further explore specific indicators of housing crisis in either city!',
	
  
    chapters: [
        {
            id: 'chapter1',
            alignment: 'right',
            hidden: false,
            index: 0,
            title: 'The Housing Crisis in NYC',
            image: 'images/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 9.02,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
           
            
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter2',
            alignment: 'left',
            hidden: false,
            index: 1,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 10,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    {
    id: 'chapter3',
            alignment: 'right',
            hidden: false,
            index: 2,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.97615, 40.71901],
                zoom: 9.04,
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
    },

            {
            id: 'chapter4',
            alignment: 'left',
            hidden: false,
            index: 3,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 10.02,
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'chapter5',
            alignment: 'right',
            hidden: false,
            index: 4,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 9,
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'chapter6',
            alignment: 'left',
            hidden: false,
            index: 5,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 10.04,
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
    id: 'interlude',
    alignment: 'center',
    index: 6,
    hidden: false,
        paragraphs: [
        'Let\'s give an example of someone looking for affordable housing through these routes and compare them.',
        'Name: Alex Rodriguez.',
        'Income: $30,000 annually.',
        'Current housing situation: Alex currently lives in a small rented apartment. However, the high cost of living in the city, combined with her modest income, has made it increasingly challenging for her to afford rent and other basic necessities. Alex is determined to find more affordable housing options to ease her financial burden. Alex is seeking stable and affordable housing that will allow her to save money, improve her overall financial situation, and focus on her personal and professional growth.',
        'Alex has been searching for affordable housing alternatives, and she has identified NYCHA (New York City Housing Authority) as a potential option due to its subsidized rates for low-income individuals. She understands that the application process may have specific eligibility criteria, and she is prepared to provide all necessary documentation to prove her income level and housing need. She also has interest in social housing in Amsterdam. Amsterdam\'s cost of living may be comparatively lower than New York City, allowing Alex to stretch her income further and save more effectively. Also, the social housing system in Amsterdam is specifically desif=gned designed to ensure a decent quality of life for residents, aligning with Alex’s goals of achieving stability and well-being.',
    ],
    location: {
        center: [-73.97615, 40.71901],
                        zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
    }
},

{
    id: 'interlude2',
    alignment: 'center',
    hidden: false,
    index: 7,
    leftText: [
        'Timeline for NYCHA Housing - ',
        'Document Preperation (2-3 weeks):',
        ' Alex takes 2-3 weeks to gather necessary documents, such as pay stubs and tax returns.',
        'Application Submission (1 day):',
        ' Alex submits her application online or in person.',
        'Waiting and Follow-Ups (2-5 years):',
        ' Although the length of this process fluxuates greatly, at the time this housing data was collected (~2010), someone like Alex could expect to wait 2-5 years. In the mean time they would have to explore other housing options, a homeless shelter would put her on a priority list for NYCHA housing, however is a last resort. She may have to look at other affordable housing options, like hosuing lotteries or section 8 housing in this time.',
        'The Call and Move (1-2 months):',
        ' Once notified, Alex has 1-2 months to make a decision and potentially move into the new apartment.',
        'Total Time : 2.2 - 5.25 years'
    ],
    rightText: [
        'Timeline for Social Housing - ',
        'Document Preperation (1-3 weeks):',
        ' Alex takes 1-3 weeks to fill out the online registration form and submit proof of income.',
        'Waiting and Follow Up (1-3 years):',
        ' Although the length of this process also fluxuates greatly, at the time this housing data was collected (~2010), someone like Alex could expect to wait a 1-3 years. In the mean time they would have to explore other housing options, like co-housing communities or anti-squatting programs.',
        'The Call and Move: (1-2 months):',
        ' After receiving an email about an available apartment, Alex has 1-2 months to visit for a viewing and make a decision.',
        'Total Time : 1.1 - 3.25 years'
    ],
    location: {
        center: [-73.97615, 40.71901],
                zoom: 8.5,
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
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],

            
render: function () {
    // Create container div
    var container = document.createElement('div');
    container.setAttribute('id', 'interlude2');
    container.classList.add('step', 'centered');

    // Create left text div
    var leftTextDiv = document.createElement('div');
    leftTextDiv.classList.add('leftText');
    config.chapters[7].leftText.forEach(para => {
        var paraText = document.createElement('p');
        paraText.innerText = para;
        leftTextDiv.appendChild(paraText);
    });

    // Create right text div
    var rightTextDiv = document.createElement('div');
    rightTextDiv.classList.add('rightText');
    config.chapters[7].rightText.forEach(para => {
        var paraText = document.createElement('p');
        paraText.innerText = para;
        rightTextDiv.appendChild(paraText);
    });

    // Append left and right text to the container
    container.appendChild(leftTextDiv);
    container.appendChild(rightTextDiv);

    // Append the container to the story
    document.getElementById('features').appendChild(container);
},

},







    ]
};


