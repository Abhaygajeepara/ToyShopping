import axios from 'axios';

const api = {};

api.postData = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error while making POST request:', error);
    throw error;
  }
};

api.getData = async (url, params) => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error while making GET request:', error);
    throw error;
  }
};

export default api;
