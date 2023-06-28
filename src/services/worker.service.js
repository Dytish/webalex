import axios from 'axios';

const API_URL = 'http://localhost:8089/api/';

class WorkerService {
    getWorkers() {
        return axios
          .post(API_URL + 'worker/listWorkers', {
          },
          ).then(response => {
            if (response.data.accessToken) {
              localStorage.setItem('getWorkers', JSON.stringify(response.data));
            }
            return response.data;
            });
      }
}

export default new WorkerService();