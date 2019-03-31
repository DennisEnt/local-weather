// wunderground api is closed
// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon${longitude}&APPID=${API_KEY}

const API_KEY = 'f904f314bb36070d99d69fd1df14fa8f';

navigator.geolocation.getCurrentPosition(position => {
  let { latitude, longitude } = position.coords;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data.weather[0].description);
      const tempC = data.main.temp;
      const formatTemp = tempC.toFixed(0);
      const weather = data.weather[0].main;
      const city = data.name;
      const icon = data.weather[0].description;
      document.getElementById('city').innerHTML = `${city}`;
      document.getElementById('temperature').innerHTML = `Today's Temperature:`;
      document.getElementById('temp').innerHTML = `${formatTemp}&#8451`;
      // document.getElementById(
      //   'forecast'
      // ).innerHTML = `Today's Weather Forecast:`;
      // document.getElementById('weather').innerHTML = weather;
      // var skycons = new Skycons({
      //   color: 'black'
      // });
      // switch (icon) {
      //   case 'fog':
      //   case 'hazy':
      //     skycons.add('icon1', Skycons.FOG);
      //     skycons.play();
      //     break;
      //   case 'sleet':
      //   case 'chancesleet':
      //     skycons.add('icon1', Skycons.SLEET);
      //     skycons.play();
      //     break;
      //   case 'chancerain':
      //   case 'chancetstorms':
      //   case 'rain':
      //   case 'tstorms':
      //   case 'unknown':
      //     skycons.add('icon1', Skycons.RAIN);
      //     skycons.play();
      //     break;
      //   case 'chancetsnow':
      //   case 'flurries':
      //   case 'chanceflurries':
      //   case 'snow':
      //     skycons.add('icon1', Skycons.SNOW);
      //     skycons.play();
      //     break;
      //   case 'mostlycloudy':
      //   case 'partlycloudy':
      //   case 'partlysunny':
      //     skycons.add('icon1', Skycons.PARTLY_CLOUDY_DAY);
      //     skycons.play();
      //     break;
      //   case 'sunny':
      //   case 'mostlysunny':
      //   case 'clear':
      //     skycons.add('icon1', Skycons.CLEAR_DAY);
      //     skycons.play();
      //     break;
      //   case 'cloudy':
      //     skycons.add('icon1', Skycons.CLOUDY);
      //     skycons.play();
      //     break;
      // }
    });
});
