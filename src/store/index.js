import { createStore } from "vuex";
import QuestionnaireService from '../services/questionnaire.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };



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
      getQuestionnairesAdmin({ commit, state }){
        return QuestionnaireService.getQuestionnairesAdmin(state.user).then(questionnaires => {
          if(questionnaires.success == true){
            localStorage.setItem('questionnairesAdmin', JSON.stringify(questionnaires.res));
            // console.log(localStorage.workers)
            // commit('editBot', bot.res);
            // console.log(state.user)
            commit('giveQuestAdmin');
            // state.status.loggedIn = false;
            // console.log(state.user)
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
    mutations: {
      editUser(state, user) {
        state.user = user;
      },
      giveQuestAdmin(state){
        state.user = null;
      },
    }
});
export default store;