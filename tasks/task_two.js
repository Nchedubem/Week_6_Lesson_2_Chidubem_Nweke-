function geoLocation() {
navigator.geolocation ?
navigator.geolocation.getCurrentPosition( (position) => {
  const latitude = position.coords.latitude;
  const Longitude = position.coords.longitude;
  
  // Use the Geocoding API to get the city and country
  fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
      .then(response => response.json())
      .then(data => {
        const city = data.address.city || data.address.village || data
        address.town || 'City is unknown';
        const country = data.address.country || 'country is unknown';
        const time = new Date().toLocaleTimeString();
        const altitude = position.coords.altitude || 'altitude is currently not available';

      });




  // Display the location data
  document.getElementById("location").innerHTML = `Latitude: ${lat}, Longitude: ${lon}`;
  document.getElementById("city").innerHTML = city;
  document.getElementById("country").innerHTML = country;
  document.getElementById("time").innerHTML = time.toLocaleTimeString();
  document.getElementById("altitude").innerHTML = alt + " meters";
});

// Handle errors
navigator.geolocation.addEventListener("error", function(error) {
  console.log(`Error: ${error.message}`);
});



window.