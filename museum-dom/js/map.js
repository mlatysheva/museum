mapboxgl.accessToken = 'pk.eyJ1IjoibWxhdHlzaGV2YSIsImEiOiJja3VvY3c1ZDgweDU3MnZwMWVpenNka3Q3In0.by3zY81-28zCMOQabg_lIA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/light-v10', // style URL
  // center: [-74.5, 40], 
  center: [2.3364, 48.86091],// starting position [lng, lat]
  zoom: 16 // starting zoom
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({color: 'black'})
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker2 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({color: 'gray'})
.setLngLat([2.3365, 48.8625])
.addTo(map);
 