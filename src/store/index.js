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
            return WorkerService.getUsers().then(workers => {
                if(workers.success == true){
                  localStorage.setItem('workers', JSON.stringify(workers.res));
                  // console.log(localStorage.workers)
                  // commit('editBot', bot.res);
                  return Promise.resolve(workers);
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