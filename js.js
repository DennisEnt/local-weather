navigator.geolocation.getCurrentPosition(position => {
  let { latitude, longitude } = position.coords;
  fetch(
    `https://api.wunderground.com/api/36708126e28ee6ce/conditions/q/${latitude},${longitude}.json'`
  )
    .then(res => res.json())
    .then(data => {
      const tempC = data.current_observation.temp_c;
      const formatTemp = tempC.toFixed(0);
      const weather = data.current_observation.weather;
      const city = data.current_observation.display_location.city;
      const icon = data.current_observation.icon;
      document.getElementById('city').innerHTML = `${city}`;
      document.getElementById('temperature').innerHTML = `Today's Temperature:`;
      document.getElementById('temp').innerHTML = `${formatTemp}&#8451`;
      document.getElementById(
        'forecast'
      ).innerHTML = `Today's Weather Forecast:`;
      document.getElementById('weather').innerHTML = weather;
      var skycons = new Skycons({
        color: 'black'
      });
      switch (icon) {
        case 'fog':
        case 'hazy':
          skycons.add('icon1', Skycons.FOG);
          skycons.play();
          break;
        case 'sleet':
        case 'chancesleet':
          skycons.add('icon1', Skycons.SLEET);
          skycons.play();
          break;
        case 'chancerain':
        case 'chancetstorms':
        case 'rain':
        case 'tstorms':
        case 'unknown':
          skycons.add('icon1', Skycons.RAIN);
          skycons.play();
          break;
        case 'chancetsnow':
        case 'flurries':
        case 'chanceflurries':
        case 'snow':
          skycons.add('icon1', Skycons.SNOW);
          skycons.play();
          break;
        case 'mostlycloudy':
        case 'partlycloudy':
        case 'partlysunny':
          skycons.add('icon1', Skycons.PARTLY_CLOUDY_DAY);
          skycons.play();
          break;
        case 'sunny':
        case 'mostlysunny':
        case 'clear':
          skycons.add('icon1', Skycons.CLEAR_DAY);
          skycons.play();
          break;
        case 'cloudy':
          skycons.add('icon1', Skycons.CLOUDY);
          skycons.play();
          break;
      }
    });
});
