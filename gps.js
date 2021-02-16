   // (B) GET GPS COODINATES + DRAW MAP
   window.addEventListener("load", function() {

    // (B1) INSERT ACCESS TOKEN HERE!
   mapboxgl.accessToken= "pk.eyJ1IjoicmFzaGlkMzY0IiwiYSI6ImNra3Q3eHBqbzFkc20ybnMxNzY1cXdyaTUifQ.xyC1ok2d4Hv36ugkIrlJsw"
   let succeed = function(pos) {
           // DRAW MAP
           let map = new mapboxgl.Map({
               container: "map",
               style:"mapbox://styles/mapbox/streets-v11",
               center:[pos.coords.longitude, pos.coords.latitude ],
               zoom:15
           });

           // DRAW MARKER
           let marker = new mapboxgl.Marker()
           .setLngLat ([pos.coords.longitude, pos.coords.latitude ])
           .addTo(map);
       };

       // (B3) ON FAILING TO GET GPS COORDINATES
       let failure = function(err) {
           console.log(err);
       }; 

       // (B4) GPS OPTIONS
       let options = {
           enableHighAccuracy: true,
           timeout: 5000,
           maximumAge:0
       };

       // (B2) ON SUCCESSFULLY GETTING GPS COORDINATES
       navigator.geolocation.getCurrentPosition(succeed, failure, options);
   });