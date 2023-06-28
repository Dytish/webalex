import { createStore } from "vuex";
import WorkerService from '../services/worker.service';

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
        getWorkers() {
            return WorkerService.getWorkers().then(workers => {
                if(workers.success == true){
                  localStorage.setItem('workers', workers.res);
                  console.log(localStorage.logo)
                  // commit('editBot', bot.res);
                  return Promise.resolve(workers);
                }
              }
              ).catch(error => {
                console.log(error.message);
                alert("Ошибка logo");
                Promise.reject(error)
              });
        },
    },
    mutations: {}
});
export default store;