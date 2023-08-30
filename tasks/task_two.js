
function geoLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition( (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  // Use the Geocoding API to get the city and country
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        const city = data.address.city || data.address.village || data.
        address.town || 'City is unknown';
        const country = data.address.country || 'country is unknown';
        const time = new Date().toLocaleTimeString();
        const altitude = position.coords.altitude || 'altitude is currently not available';

        document.getElementById("location").textContent = `${latitude}: ${latitude}`;
        document.getElementById("city").textContent = city;
        document.getElementById("country").textContent= country;
        document.getElementById("time").textContent = time;
        document.getElementById("altitude").textContent = altitude;
      })
  // Display the location data
      // .catch(error => console.error(error));
  })
}
}
const button = document.querySelector('#getLocationButton')
button.addEventListener('click', function(){
  console.log('Button is clicked');
  geoLocation()
})   
// window.onloadcatgetLocaion