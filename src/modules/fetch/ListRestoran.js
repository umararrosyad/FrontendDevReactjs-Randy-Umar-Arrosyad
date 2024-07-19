import { instance as axios } from "../index";
const listRestoran = async () => {
  try {
    const requestData = {
      language: "en_US",
      location_id: "297704",
      currency: "USD",
      offset: 0,
      Pagination: 2
    };
    const response = await axios.post(`/search/`, requestData, {
        headers: {
            'x-rapidapi-key': 'c43ae62e23msh634a24507f2acd4p1bcdcejsne82e57a3f09d',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const listReviws = async (location) => {
  try {
    const requestData = {
      language: "en_US",
      location_id: location,
      currency: "USD",
      offset: 0,
      Pagination: 2
    };
    const response = await axios.post(`/reviews/`, requestData, {
        headers: {
            'x-rapidapi-key': 'c43ae62e23msh634a24507f2acd4p1bcdcejsne82e57a3f09d',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { listRestoran, listReviws };
