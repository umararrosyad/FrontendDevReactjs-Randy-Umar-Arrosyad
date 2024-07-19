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
            'x-rapidapi-key': '718d6898b0mshb6246cabdfb4cb3p1934f6jsnc7650086189c',
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
            'x-rapidapi-key': '718d6898b0mshb6246cabdfb4cb3p1934f6jsnc7650086189c',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { listRestoran, listReviws };
