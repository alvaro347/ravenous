const yelpKey =
  "";
const yelpBaseUrl = "https://api.yelp.com/v3";

function YelpGet(term, location, sortBy) {
  const searchEndpoint = "/businesses/search";
  const corsOverride = 'https://cors-anywhere.herokuapp.com/';
  const queryParams = `?location=${location}&term=${term}&sort_by=${sortBy}&limit=18`
  const urlToFetch = (corsOverride + yelpBaseUrl + searchEndpoint + queryParams);
  console.log(urlToFetch);
  return fetch(urlToFetch, {
    headers:{
      Authorization: `Bearer ${yelpKey}`
    }
  }).then((response) => {
    if(response.ok){
      return response.json();
    }
    throw new Error('Request Failed!');
  }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map((business)=>({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
      }))
    }
  })
}

export default YelpGet;