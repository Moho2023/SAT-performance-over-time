var data = [{
  type: "choroplethmapbox", locations: ["NY", "MA", "VT","TX","VA"], z: [1050, 1000, 1020,1400,1029],
  geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"
}];

var layout = {mapbox: {center: {lon: -110, lat: 50}, zoom: .8},
              width: 600, height:400};

var config = {mapboxAccessToken: "pk.eyJ1IjoibW9ob3NhbWkiLCJhIjoiY2xiMmJpc3pjMDJzNzN2cWUwZWI2cmlpYiJ9.Upwk4JeU3_HlH_5Sy4nVhA"};

Plotly.newPlot('myDiv', data, layout, config);
