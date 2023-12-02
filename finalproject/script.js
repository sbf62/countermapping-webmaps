var initLoad = true;
var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    var layerObj = map.getLayer(layer);
    var layerType = layerObj ? layerObj.type : null;
    return layerType ? layerTypes[layerType] : [];
}

function setLayerOpacity(layer) {
    var layerObj = layer ? map.getLayer(layer.layer) : null;
    if (layerObj) {
        var paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(function (prop) {
            var options = {};
            if (layer.duration) {
                var transitionProp = prop + "-transition";
                options = { "duration": layer.duration };
                map.setPaintProperty(layer.layer, transitionProp, options);
            }
            map.setPaintProperty(layer.layer, prop, layer.opacity, options);
        });
    }
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (config.para1) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para1;
    header.appendChild(bylineText);
}

if (config.para2) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para2;
    header.appendChild(bylineText);
}

if (config.para3) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para3;
    header.appendChild(bylineText);
}

if (config.para4) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para4;
    header.appendChild(bylineText);
}

if (config.para5) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para5;
    header.appendChild(bylineText);
}

if (config.para6) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para6;
    header.appendChild(bylineText);
}

if (config.para7) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para7;
    header.appendChild(bylineText);
}

if (config.para8) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.para8;
    header.appendChild(bylineText);
}


if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.paragraphs) {
    record.paragraphs.forEach(para => {
        var paraText = document.createElement('p');
        paraText.innerText = para;
        chapter.appendChild(paraText);
    });
}
if (record.id === 'interlude2') {
    var leftTextDiv = document.createElement('div');
    record.leftText.forEach(para => {
        var paraText = document.createElement('p');
        paraText.innerText = para;
        leftTextDiv.appendChild(paraText);
    });
    leftTextDiv.classList.add('leftText');

    var rightTextDiv = document.createElement('div');
    record.rightText.forEach(para => {
        var paraText = document.createElement('p');
        paraText.innerText = para;
        rightTextDiv.appendChild(paraText);
    });
    rightTextDiv.classList.add('rightText');

    chapter.appendChild(leftTextDiv);
    chapter.appendChild(rightTextDiv);
}

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    if (record.video) {
    var videoDiv = document.createElement('div');
    videoDiv.setAttribute('class', 'videoContainer');
    video =  document.createElement('video');
    video.controls=true;
    video.autoplay=true;
    video.loop=true;
    video.src = record.video;
    videoDiv.appendChild(video)
    chapter.appendChild(videoDiv);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

var map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/sbf62/clozx8hk700t701qn92q86i3u', // You can change the style URL
    center: [4.91,52.373],
    zoom: 10,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});



if (config.showMarkers) {
    var marker = new mapboxgl.Marker({ color: config.markerColor });
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();
var rotationMaps = [map, map2];

map.on("load", function () {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    }

    // As the map moves, grab and update bounds in inset map.
    if (config.inset) {
        map.on('move', getInsetBounds);
    }


scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
.onStepEnter(response => {
    var chapter = config.chapters.find(chap => chap.id === response.element.id);
    if (!chapter) {
        console.error('Chapter not found:', response.element.id);
        return;
    }

    response.element.classList.add('active');
    map[chapter.mapAnimation || 'flyTo'](chapter.location);

    if ([1, 3, 5].includes(chapter.index) && map) {
        console.log('Rotating map during chapter:', chapter.index);
        map.once('moveend', () => {
            const rotateNumber = map.getBearing();
            map.rotateTo(rotateNumber + 180, {
                duration: 30000,
                easing: function (t) {
                    return t;
                }
            });
        });
    }

    if ([2, 4, 6].includes(chapter.index) && map2) {
        console.log('Rotating map2 during chapter:', chapter.index);
        map2.once('moveend', () => {
            const rotateNumber = map2.getBearing();
            map2.rotateTo(rotateNumber + 180, {
                duration: 30000,
                easing: function (t) {
                    return t;
                }
            });
        });
    }

// Other logic remains unchanged
if (config.inset) {
    if (chapter.location.zoom < 5) {
        insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
    } else {
        insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
    }
}
if (config.showMarkers) {
    marker.setLngLat(chapter.location.center);
}
if (chapter.onChapterEnter && Array.isArray(chapter.onChapterEnter) && chapter.onChapterEnter.length > 0) {
    chapter.onChapterEnter.forEach(setLayerOpacity);
}
if (chapter.callback) {
    window[chapter.callback]();
}
})
.onStepExit(response => {
var chapter = config.chapters.find(chap => chap.id === response.element.id);
response.element.classList.remove('active');
if (chapter.onChapterExit && Array.isArray(chapter.onChapterExit) && chapter.onChapterExit.length > 0) {
    chapter.onChapterExit.forEach(setLayerOpacity);
}
});




});

// Setup resize event
window.addEventListener('resize', scroller.resize);
