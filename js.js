window.onload = () => {

  navigator.geolocation.getCurrentPosition(function (position) {
    // console.log(position);
    fetch(`https://api.wunderground.com/api/36708126e28ee6ce/conditions/q/${position.coords.latitude},${position.coords.longitude}.json'`, {
      method: 'get' })
      .then(res=>res.json())
      .then(function (data) {
      const tempC = data.current_observation.temp_c;
      const tempF = data.current_observation.temp_f;
      const weather = data.current_observation.weather;
      const city = data.current_observation.display_location.full;
      const icon = data.current_observation.icon;
      console.log(data);
      document.getElementById("city").innerHTML = `${city}`;
      document.getElementById("temp").innerHTML = `${tempC}&#8451`;
      document.getElementById("weather").innerHTML = weather;
      var skycons = new Skycons({
        "color": "black"
      });
      if (icon == "fog" || "hazy") {
        skycons.add("icon1", Skycons.FOG);
        skycons.play();
      }
      else if (icon == "cloudy") {
        skycons.add("icon1", Skycons.CLOUDY);
        skycons.play();
      }
      else if (icon == "chancerain" || "chancetstorms" || "rain" || "tstorms" || "unknown") {
        skycons.add("icon1", Skycons.RAIN);
        skycons.play();
      }
      else if (icon == "chancesleet" || "sleet") {
        skycons.add("icon1", Skycons.SLEET);
        skycons.play();
      }
      else if (icon == "chancesnow" || "flurries" || "chanceflurries" || "snow") {
        skycons.add("icon1", Skycons.SNOW);
        skycons.play();
      }
      else if (icon == "mostlycloudy" || "partlycloudy") {
        skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
        skycons.play();
      }
      else if (icon == "clear" || "mostlysunny" || "partlysunny" || "sunny") {
        skycons.add("icon1", Skycons.CLEAR_DAY);
        skycons.play();
      }

    });
  })
}
