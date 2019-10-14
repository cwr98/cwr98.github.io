

        //var control = L.Control.openCageSearch(options).addTo(mymap);
      //L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //maxZoom: 18,
        //id: 'mapbox.mapbox-traffic-v1',
        //accessToken: mapbox_access_token
      //}).addTo(mymap);
      function map()
      {
            var mymap = L.map('mapid').setView([51.505, -0.09], 13);
            /*L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              maxZoom: 18,
              id: 'mapbox.mapbox-traffic-v1',
              accessToken: mapbox_access_token
            }).addTo(mymap);
            */
            L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png',{
            }).addTo(mymap);

            var options = {
              key: geocoder_api_key,
              limit: 10
            };
            var control = L.Control.openCageSearch(options).addTo(mymap);

             /*var marker = L.marker([51.5, -0.09]).addTo(mymap);
              var circle = L.circle([51.508, -0.11], {
                color: 'red',
                fillColor: '#f03',
                radius: 500
              }).addTo(mymap);
              var polygon = L.polygon([
                [51.509, -0.08],
                [51.503, -0.06],
                [51.51, -0.047]
              ]).addTo(mymap);
              marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
              circle.bindPopup("I am a circle.");
              polygon.bindPopup("I am a polygon");
            marker.on('click',function(e){
              mymap.setView(e.latlng, 14);
            });
            circle.on('click', function(e){
              mymap.setView(e.latlng, 13);
            });
            polygon.on('click', function(e){
              mymap.setView(e.latlng, 13);
            });
            var ZoomViewer = L.Control.extend({
              onAdd: function(){
                var gauge = L.DomUtil.create('div');
                gauge.style.width = '200px';
                gauge.style.background = 'rgba(255,255,255,0.5)';
                gauge.style.textAlign = 'left';
                mymap.on('zoomstart zoom zoomend', function(ev){
                  gauge.innerHTML = 'Zoom level:' + mymap.getZoom();
                })
                return gauge;
              }
            });
            (new ZoomViewer).addTo(mymap);
            mymap.setView([0, 0], 1);
            */



      //{ var marker[1] = L.marker([
      //[27.174961, 78.042385],
    //]);
    //anything.bindPopup("Taj Mahal")
      //var marker = [2] = L.marker([
      //[40.334245, 116.477652],
    //]);
    //anything.bindPopup("Small Village?")
      //var marker = [3] = L.marker([
      //[30.328611, 35.441944],
    //]);
    //anything.bindPopup("Petra")
      //var marker = [4] = L.marker([
        //[-22.951389, -43.2108334],
    //  ]);
    //  anything.bindPopup("Cristo Redentor")
  //    var marker = [5] = L.marker([
    //      [-13.163056, -72.545556],
    //  ]);
    //  anything.bindPopup("Machu Picchu")
    //  var marker = [6] = L.marker([
    //      [20.682778, -88.569167],
  //    ]);
  //    anything.bindPopup("Chichén-Itzá")
//      var marker = [7] = L.marker([
//          [41.890169, 12.492269],
//      ]);
  //    anything.bindPopup("Arch of Constantine")
//    }
}
