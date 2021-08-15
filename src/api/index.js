import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,

          // bl_latitude: "11.847676",
          // tr_latitude: "12.838442",
          // bl_longitude: "109.095887",
          // tr_longitude: "109.149359",
        },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_TRIP_ADVISOR_API_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      `https://community-open-weather-map.p.rapidapi.com/find`,
      {
        params: {
          lon: lng,

          lat: lat,
        },
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_RAPID_WEATHER_API_KEY,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
