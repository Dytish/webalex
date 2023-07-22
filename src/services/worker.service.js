import axios from 'axios';

const API_URL = 'https://api.dosugrostov.site/api/';

class WorkerService {
  getUsers() {
        return axios
          .post(API_URL + 'test/2', {
          },
          ).then(response => {
            if (response.data.accessToken) {
              localStorage.setItem('getUsers', JSON.stringify(response.data));
            }
            return response.data;
            });
      }
}

export default new WorkerService();