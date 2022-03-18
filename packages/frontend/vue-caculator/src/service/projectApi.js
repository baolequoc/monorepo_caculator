/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import { getToken } from '../utils/localStorage';
// eslint-disable-next-line no-unused-vars
class ProjectApi {
  static async saveData (value) {
    const sendHistory = { history: value };
    await axios.post('http://localhost:3000/api/savedata', sendHistory, {
      headers: {
        'x-access-token': localStorage.getItem('accessToken'),
      },
    });
  }

  static async signin (value) {
    const response = await axios.post('http://localhost:3000/api/auth/signin', value);
    return response;
  }

  static async signup (value) {
    const reponse = await axios.post('http://localhost:3000/api/auth/signup', value);
    return reponse;
  }

  static async getValue (value) {
    const response = await axios.post('http://localhost:3000/api/getdata', value);
    return response;
  }

  static async getHistory () {
    const response = await axios.get('http://localhost:3000/api/getdata', {
      headers: {
        'x-access-token': localStorage.getItem('accessToken'),
      },
    });
    return response;
  }
}
export default ProjectApi;
