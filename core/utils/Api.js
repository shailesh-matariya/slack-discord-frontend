import axios from 'axios';
import { message } from 'antd';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
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
        message.error('Internal Server Error');
        break;
      case 502:
        message.error('Bad Gateway');
        break;
      case 503:
        message.error('Service Unavailable');
        break;
      default:
        message.error(apiMessage);
        break;
    }

    return Promise.reject(err);
  }
);
