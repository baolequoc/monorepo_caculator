import axios from 'axios';
import { getTokenLocal } from '../utils/localStorage';

class ProjectApi {
  static async saveData (value) {
    // save history to database
    const sendHistory = { history: value };
    await axios.post(`${process.env.VUE_APP_BACKEND}/user/history`, sendHistory, {
      headers: {
        'x-access-token': getTokenLocal(),
      },
    });
  }

  static async signin (value) {
    const response = await axios.post(`${process.env.VUE_APP_BACKEND}/auth/signin`, value);
    return response;
  }

  static async signup (value) {
    const reponse = await axios.post(`${process.env.VUE_APP_BACKEND}/auth/signup`, value);
    return reponse;
  }

  static async getValue (value) {
    const valueSend = { value };
    const response = await axios.post(`${process.env.VUE_APP_BACKEND}/caculate`, valueSend);
    return response;
  }

  static async getHistory () {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND}/user/history`, {
      headers: {
        'x-access-token': getTokenLocal(),
      },
    });
    return response;
  }
}
export default ProjectApi;
