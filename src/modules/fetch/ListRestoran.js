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
            'x-rapidapi-key': '415384770dmshc54d89d47a0067fp1f45a6jsn4c9321679498',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { listRestoran };
