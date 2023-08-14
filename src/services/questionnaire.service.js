import axios from 'axios';

const API_URL = 'https://api.dosugrostov.site/api/';

class QuestionnaireService {
  getQuestionnaires() {
        return axios
          .post(API_URL + 'test/2', {
          },
          ).then(response => {
            if (response.data.accessToken) {
              localStorage.setItem('getQuestionnaires', JSON.stringify(response.data));
            }
            return response.data;
            });
      }
}

export default new QuestionnaireService();