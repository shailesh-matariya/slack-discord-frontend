import axios from 'axios';

// export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_URL = 'http://192.168.29.155:8000/api';
export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/** Error Handling */
httpClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const { response = {} } = err;
    const { data = {}, status } = response;
    const { message: apiMessage } = data;

    switch (status) {
      case 400:
        console.error(apiMessage);
        break;
      case 401:
        throw new Error(apiMessage);
      case 500:
        console.error('Internal Server Error');
        break;
      case 502:
        console.error('Bad Gateway');
        break;
      case 503:
        console.error('Service Unavailable');
        break;
      default:
        console.error(apiMessage);
        break;
    }

    return Promise.reject(err);
  }
);
