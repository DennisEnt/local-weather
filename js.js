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
      const tempC = data.main.temp;
      const formatTemp = tempC.toFixed(0);
      const weather = data.weather[0].description;
      const city = data.name;
      const icon = data.weather[0].icon;
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
        case '01d':
          skycons.add('icon1', Skycons.CLEAR_DAY);
          skycons.play();
          break;

        case '01n':
          skycons.add('icon1', Skycons.CLEAR_NIGHT);
          skycons.play();
          break;

        case '02d':
          skycons.add('icon1', Skycons.PARTLY_CLOUDY_DAY);
          skycons.play();
          break;

        case '02n':
          skycons.add('icon1', Skycons.PARTLY_CLOUDY_NIGHT);
          skycons.play();
          break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          skycons.add('icon1', Skycons.CLOUDY);
          skycons.play();
          break;
        case '09d':
        case '09n':
          skycons.add('icon1', Skycons.RAIN);
          skycons.play();
          break;
        case '10d':
        case '10n':
        case '11d':
        case '11n':
          skycons.add('icon1', Skycons.SLEET);
          skycons.play();
          break;
        case '13d':
        case '13n':
          skycons.add('icon1', Skycons.SNOW);
          skycons.play();
          break;
        default:
          skycons.add('icon1', Skycons.FOG);
          skycons.play();
          break;
      }
    })
    .catch(error => console.log(error));
});
