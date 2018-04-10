const apiKey = 'pQ4hJsI3wgHPTLwvhYitdoLaZlp4TOpzltuSQPmxoNwHGIUTEzj1jBUgGvEf96pC6U4F2hUfdXYvmhwqUdCITQg8jYKe1LM0RXsTLBGtfp1yvL8WZ0vODUjv4uDMWnYx';
const Yelp = {
search(term, location, sortBy){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
  {
    headers:{
      Authorization:`Bearer ${apiKey}`}
    }).then(response =>{
      return response.json();
    }).then(jsonResponse =>{
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map(business => ({
          id:business.id,
          imageSrc:business.image_url,
          name:business.name,
          address:business.location.address,
          city:business.location.city,
          state:business.location.state,
          zipCode:business.location.zipCode,
          category:business.category,
          rating:business.rating,
          reviewCount:business.reviewCount
        }));
      }
  });
}
};

export default Yelp;
