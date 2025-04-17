mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//    container: 'map',
//    center: [77.5877, 13.1295],
//    zoom: 16
// });



// const marker = new mapboxgl.Marker({ color: "red" })  
//   .setLngLat([77.5877, 13.1295])
//   .addTo(map);


  const parsedCoordinates = JSON.parse(coordinates);
  const map = new mapboxgl.Map({
      container: 'map',
      center: parsedCoordinates,
      zoom: 16
  });
  
  const marker = new mapboxgl.Marker({ color: "red" })  
    .setLngLat(parsedCoordinates)
    .addTo(map);
  