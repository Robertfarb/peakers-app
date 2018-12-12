import API_KEY from './api_key';

export const codeAddress = (address) => {
  let geocoder = new google.maps.Geocoder();
  address = "10790 Wilshire Blvd. Los Angeles, CA 90024"
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status === 'OK') {
      localStorage.setItem("results", JSON.parse(results[0]));
      // return results;
      console.log(results);
    } else {
      console.error(`Geocode was not successful for the following reason: ${status}`);
    }
  });
}