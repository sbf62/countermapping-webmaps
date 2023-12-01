var config = {
    style:  'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u',
    accessToken: 'pk.eyJ1Ijoic2JmNjIiLCJhIjoiY2xuMXZhaTZkMDIzczJ3cXdmYWt3dTE2NiJ9.0Bwf-GgUm2QzNybs9scQ6Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Housing Crises Across the World',
    subtitle: 'New York City v Amsterdam',
    byline: 'By Stella Frank',

    para1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar lacus nec risus tempus, in pulvinar quam suscipit. Aliquam ultrices blandit quam, ac convallis ligula egestas eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin et enim vitae ex pellentesque porttitor. Duis eu diam sed purus varius auctor. Morbi nec consequat mi, et pulvinar tortor. Curabitur auctor iaculis magna eu volutpat. Cras tristique odio ligula, vitae rutrum nibh porta quis. Sed porttitor non augue non fringilla. Donec ac enim vel metus dapibus cursus.',
	para2:'Proin consequat aliquam turpis, at tincidunt dolor mattis eu. Curabitur vestibulum sed tellus a molestie. Nam cursus a turpis eget varius. Ut imperdiet dui nec dignissim cursus. Aliquam a sem sit amet velit ornare tristique. Morbi eu dui at mauris dapibus dignissim. Nam ultrices porta neque, ac tincidunt sem suscipit iaculis. Maecenas fermentum gravida justo vel volutpat. Donec iaculis sapien odio, ut tincidunt est rhoncus quis. In a purus massa. Sed varius ipsum et purus convallis, eget molestie ligula tristique. Morbi non nisi vel sapien ultricies ultrices. Cras sed est aliquet, tempus orci eget, condimentum mi. Nullam magna sem, interdum in nunc vel, elementum commodo tortor. Phasellus velit ipsum, tincidunt eu rutrum vel, scelerisque ac nulla. Nunc sodales elit et velit varius, at porta lorem aliquet.',

    
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
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
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
    id: 'interlude',
    alignment: 'center',
    hidden: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
    video: 'images/vid.mp4',
    location: {
      center: [-73.97615, 40.71901],
      zoom: 14.84,
      pitch: 48,
      bearing: 142.44,
    }
	},


    {
    id: 'chapter3',
            alignment: 'left',
            hidden: false,
            index: 2,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
    },

            {
            id: 'chapter4',
            alignment: 'right',
            hidden: false,
            index: 3,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'chapter5',
            alignment: 'left',
            hidden: false,
            index: 4,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
  
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: 'chapter6',
            alignment: 'right',
            hidden: false,
            index: 5,
            title: 'The Housing Crisis in Amsterdam',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-73.97615, 40.71901],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,

            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

    ]
};


