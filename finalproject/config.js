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
            title: 'Homelessness in NYC by Borough',
            image: 'images/homelessnyc.png',
            description: 'The substantial difference in homelessness rates between Manhattan and Queens not only serves as a critical gauge of the housing crisis but also profoundly influences individuals\' choices about where to live and shapes the lived experiences of residents in these boroughs. The high incidence of homelessness in Manhattan may discourage prospective residents who are concerned about housing stability and affordability. It creates an environment where finding secure and affordable housing becomes a considerable challenge, influencing the residential preferences of those who prioritize housing security. On the contrary, the lower homelessness rates in Queens may make it a more appealing option for individuals seeking a more stable and affordable living situation. The housing crisis, as reflected in these disparate rates, thus plays a pivotal role in shaping the social fabric of each borough, impacting the day-to-day experiences and decisions of residents. Addressing the housing crisis becomes not only an imperative for mitigating homelessness but also for fostering inclusive and sustainable communities where individuals can access stable housing and build their lives.',
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
            title: 'The Housing Crisis in Amsterdam by District',
            image: 'images/povamst.png',
            description: 'The disparities in poverty rates across Amsterdam\'s districts play a pivotal role in shaping the residential landscape and the everyday experiences of their inhabitants. Zuidoost, grappling with the highest poverty rates, reflects the pressing socioeconomic challenges faced by its residents, encompassing issues like limited economic opportunities and educational disparities. For those considering where to live, the higher poverty rates in Zuidoost may prompt reflections on the broader implications for community resources, social services, and overall quality of life. On the other hand, the lower poverty rates in Zuid suggest a district with potentially more robust economic infrastructure and social support systems, making it an appealing choice for those who prioritize access to diverse opportunities. The contrast in poverty rates underscores the multifaceted nature of the economic challenges within the city, emphasizing the importance of targeted interventions to address systemic inequalities and create thriving, inclusive communities for all residents.',
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
            title: 'NYCHA Housing Stock by Borough',
            image: 'images/NYCHApic.png',
            description: 'The distribution of NYCHA housing stock reveals a notable pattern across the boroughs, with the Bronx having the highest inventory and Staten Island and Queens with the lowest. This discrepancy in public housing availability reflects the unique demographic and socioeconomic landscapes of each borough. The Bronx, characterized by a dense urban population and historically higher rates of poverty, sees a greater need for public housing, resulting in a larger NYCHA housing stock. Conversely, the lower prevalence of NYCHA housing in Staten Island and Queens may be attributed to factors such as different urban planning priorities, lower population density, or varied economic conditions. Understanding this distribution is crucial for policymakers and advocates to tailor housing policies effectively, ensuring that public housing resources are allocated in alignment with the distinct needs of each borough\'s residents. Prospective residents in the Bronx may find a relatively higher availability of NYCHA housing options, while those in Staten Island and Queens may face more limited choices, emphasizing the importance of addressing the diverse housing needs across New York City\'s boroughs.',
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
            title: 'Social Housing Stock by District',
            image: 'images/socialhousingampic.png',
            description: 'The allocation of social housing in Amsterdam unveils a distinct disparity, with Nieuw-West having the highest inventory and Centrum with the lowest. This variation in social housing distribution mirrors the demographic and urban planning differences between these two districts. Nieuw-West, characterized by a mix of residential and industrial areas, holds a greater concentration of social housing, likely driven by considerations of affordability and accessibility for a diverse population. In contrast, Centrum, known for its historic significance and central location, may prioritize other forms of urban development, resulting in a reduced availability of social housing. Recognizing this disparity is crucial for individuals seeking social housing, as it underscores the importance of navigating housing options based on the specific resources and priorities of each district, impacting the choices available to those in search of affordable and socially inclusive living arrangements.',
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
            title: 'Average Rent Paid for NYCHA Housing by Borough',
         
            description: 'The revelation that payments for NYCHA housing rent are the highest in Brooklyn ($549 in 2010) and the lowest in the Bronx ($497 in 2010), while consistently calculated as 30% of income, carries profound implications for the financial well-being of residents in these boroughs. Despite the standardized percentage model, the higher rent payments in Brooklyn indicate a significant income disparity, potentially placing a heavier financial burden on NYCHA tenants in this borough. This emphasizes the urgent need to address broader economic challenges, such as wage discrepancies or the cost of living, to ensure that even a standardized percentage does not disproportionately impact residents. Conversely, the lower rent payments in the Bronx, while reflective of a more affordable living situation, underscore the need to examine and implement strategies that contribute to income stability and economic empowerment across all boroughs. This data highlights the nuanced nature of housing affordability, necessitating a comprehensive approach that considers both standardized rent calculations and broader socioeconomic factors to promote equitable access to affordable housing throughout New York City.',
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
            title: 'Average Cost of Social Housing In Amsterdam\'s Districts',
           
            description: 'The data revealing that Zuidoost has the highest average rent for social housing ($466 in 2010), while the West district boasts the lowest in Amsterdam ($398 in 2010), both calculated as a percentage of income, unveils nuanced considerations beyond rent affordability. Despite the standardized rent calculation, the higher rents in Zuidoost may signal additional challenges for social housing tenants, potentially impacting their ability to navigate other elements of the cost of living, such as finding employment or affording essential amenities. Moving to a district with higher average incomes might pose difficulties for residents in Zuidoost, who may face economic disparities and barriers in accessing job opportunities or managing overall living expenses. On the contrary, the lower average rents in the West district may contribute to a more accessible living situation, potentially attracting residents seeking not only affordable housing but also a neighborhood where economic opportunities and the overall cost of living align more favorably. ',
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
        'Alex has been searching for affordable housing alternatives, and she has identified NYCHA (New York City Housing Authority) as a potential option due to its subsidized rates for low-income individuals. She understands that the application process may have specific eligibility criteria, and she is prepared to provide all necessary documentation to prove her income level and housing need. She also has interest in social housing in Amsterdam. Amsterdam\'s cost of living may be comparatively lower than New York City, allowing Alex to stretch her income further and save more effectively. Also, the social housing system in Amsterdam is specifically designed to ensure a decent quality of life for residents, aligning with Alex’s goals of achieving stability and well-being.',
        'For someone, like Alex, prioritizing a balanced consideration of these affordable housing factors and holding all else equal, the West district in Amsterdam and the Bronx borough in New York City present compelling options. In both locations, the average rent for social housing is relatively lower, indicating a degree of affordability within the standardized percentage of income model. Additionally, these districts offer the prospect of living in areas with comparatively lower housing costs while potentially benefiting from broader economic opportunities and a more accessible overall cost of living. The West district in Amsterdam and the Bronx borough in NYC, therefore, appeal to individuals seeking a harmonious balance between affordable housing, economic prospects, and the ability to manage other essential living expenses, reflecting a comprehensive approach to addressing the complex nature of housing challenges in diverse urban contexts.',
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
        'Total Time : 2.2 - 5.25 years  Expected Rent : $497-549'
    ],
    rightText: [
        'Timeline for Social Housing - ',
        'Document Preperation (1-3 weeks):',
        ' Alex takes 1-3 weeks to fill out the online registration form and submit proof of income.',
        'Waiting and Follow Up (1-3 years):',
        ' Although the length of this process also fluxuates greatly, at the time this housing data was collected (~2010), someone like Alex could expect to wait a 1-3 years. In the mean time they would have to explore other housing options, like co-housing communities or anti-squatting programs.',
        'The Call and Move: (1-2 months):',
        ' After receiving an email about an available apartment, Alex has 1-2 months to visit for a viewing and make a decision.',
        'Total Time : 1.1 - 3.25 years  Expected Rent: $398-466'
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


