import { createStore } from "vuex";
import QuestionnaireService from '../services/questionnaire.service';

const initialState = {
    worker: {
        id: null,
        email: null,
        login: null,
        password: null,
    },
};

const store = createStore({
    namespaced: true,
    state: initialState,
    actions: {
      getQuestionnaires() {
            return QuestionnaireService.getQuestionnaires().then(questionnaires => {
                if(questionnaires.success == true){
                  localStorage.setItem('questionnaires', JSON.stringify(questionnaires.res));
                  // console.log(localStorage.workers)
                  // commit('editBot', bot.res);
                  return Promise.resolve(questionnaires);
                }
              }
              ).catch(error => {
                console.log(error.message);
                alert("Ошибка workers");
                Promise.reject(error)
              });
        },
    },
    mutations: {}
});
export default store;