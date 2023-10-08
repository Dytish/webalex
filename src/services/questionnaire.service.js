import axios from 'axios';

const API_URL = 'https://api.dosugrostov.site/api/';

class QuestionnaireService {
  getQuestionnaires() {
        return axios
          .post(API_URL + 'test/2', {
          },
          ).then(response => {
            return response.data;
            });
      }
  getQuestionnairesAdmin(user) {
        return axios
          .post(API_URL + 'test/givQuest', {
            id_telegram: user.id_telegram
          },
          ).then(response => {
            return response.data;
            });
      }
}

export default new QuestionnaireService();