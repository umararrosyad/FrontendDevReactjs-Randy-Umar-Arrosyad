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
            'x-rapidapi-key': '95f3dfa305msh04f25fde4dbe8cep148275jsn1d0d766ec3fe',
            'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com',
          }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { listRestoran };
