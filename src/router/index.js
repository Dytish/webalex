import { createRouter, createWebHistory } from 'vue-router'
import QuestionnairePage from '../pages/QuestionnairePage.vue'
import AdminQuestionnairePage from '../pages/AdminQuestionnairePage.vue'


const routeInfos = [
    {
        path : "/",
        name: 'basePage',
        component : QuestionnairePage
    },
    {
        path : "/adminQuestionnairePage/:id",
        name: 'adminQuestionnairePage',
        component : AdminQuestionnairePage
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})
export default router;