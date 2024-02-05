import AppComponent from './app.vue'
import SettingsPage from './components/pages/settings.page.vue'
import TabNavigation from './components/tabs/tab-navigation.vue'
import GeneralTab from './components/tabs/general.tab.vue'
import AnotherTab from './components/tabs/another.tab.vue'
import {App, createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router';

const routes: any[] = [
    {
        path: '/', components: {default: GeneralTab, tab: TabNavigation}
    },
    {
        path: '/another', components: {default: AnotherTab, tab: TabNavigation}
    },
    {
        path: '/settings', components: {default: SettingsPage}
    },
]

export const router = createRouter({
    history: createWebHistory('#/'),
    routes: routes
})

const app: App<Element> = createApp(AppComponent)
app.use(router)
app.mount('#wp-vue-admin-app')