// Request parameters for FoursquareAPI
const api = 'https://api.foursquare.com/v2/venues/search?';
const ll = '40.712775,-74.005973';
const oauth_token = 'QII01GK3TGA5SOUTHGMGSF22IHXKFWK1CCG5AR3K5QKLS2QJ';
const v =  '20180801';
const categoryId = '4bf58dd8d48988d116941735';
const limit = 50;



const DefaultLocationRequest = `${api}ll=${ll}&limit=${limit}&categoryId=${categoryId}&oauth_token=${oauth_token}&v=${v}`;

// Helper function for type check
  const is = (item, type) =>
  Object
  .prototype
  .toString.call(item)
  .match(/\s(\w+)]/)[1]
  .toLowerCase() === type

// Default locations Request
export const getDefaultLocations = () =>
  fetch(`${DefaultLocationRequest}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Can't get data from FoursquareAPI. Error code: ${res.status} `);
      }
    })
    .then(data =>{
      if (is(data.response.venues, 'array')) {
        return data.response.venues.map(d=>(
          {
            id: d.id,
            lat: d.location.lat,
            lng: d.location.lng,
            text: d.name,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            isOpen: false
          }))
      } else {
        return [];
      }
    })
    .catch(err => {
      console.log(err);
      alert(err);
    })

// Request location by name
export const searchLocations = (query) =>
  fetch(`${DefaultLocationRequest}&query=${query}`)
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Can't get data from FoursquareAPI. Error code: ${res.status} `);
    }
  })
  .then(data =>{
    if (is(data.response.venues, 'array')) {
      return data.response.venues.map(d=>(
        {
          id: d.id,
          lat: d.location.lat,
          lng: d.location.lng,
          text: d.name,
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          isOpen: false
        }))
    } else {
      return [];
    }
  })
  .catch(err => {
    console.log(err);
    alert(err);
  })
