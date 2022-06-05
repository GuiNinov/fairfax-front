import axios from 'axios';

const API_URL = 'https://fair-fax.herokuapp.com';

const getRequest = async (endpoint: string) => {
  try {
    const instance = await axios({
      url: endpoint,
      baseURL: API_URL,
      timeout: 120000,

      maxBodyLength: 1024 * 1024 * 1024 * 50,
      maxContentLength: 1024 * 1024 * 1024 * 50,
    });

    return instance.data;
  } catch (error: any) {
    console.log(error.response);
    return error.response.data;
  }
};

const postRequest = async (endpoint: string, data = {}) => {
  try {
    const instance = await axios({
      url: endpoint,
      baseURL: API_URL,
      method: 'post',
      timeout: 120000,
      data,
      maxBodyLength: 1024 * 1024 * 1024 * 50,
      maxContentLength: 1024 * 1024 * 1024 * 50,
    });

    return instance.data;
  } catch (error: any) {
    return error.response;
  }
};

const putRequest = async (endpoint: string, data = {}) => {
  try {
    const instance = await axios({
      url: endpoint,
      baseURL: API_URL,
      method: 'put',
      timeout: 120000,
      data,
      maxBodyLength: 1024 * 1024 * 1024 * 50,
      maxContentLength: 1024 * 1024 * 1024 * 50,
    });

    return instance.data;
  } catch (error: any) {
    return error.response;
  }
};

export { postRequest, getRequest, putRequest };
