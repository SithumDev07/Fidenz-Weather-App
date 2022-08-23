let locationElement = document.getElementById('location');

function getLocation()
{
if (navigator.geolocation)
  {
  locationElement.innerHTML="Loading..."
  navigator.geolocation.getCurrentPosition(displayPosition,showError);
  }
else{locationElement.innerHTML="Geolocation data unavailable";}
}

function displayPosition(pos) {
    locationElement.innerHTML=`(${pos.coords.latitude}, ${pos.coords.longitude})`
}

function showError() {
    locationElement.innerHTML="Geolocation data unavailable";
}
getLocation()


const toggleSwitch = document.querySelector('#theme-switch')

function switchTheme(e) {

    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

