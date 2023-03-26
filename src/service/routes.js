import LoginPage from "../pages/LoginPage"
import HomePage from "../pages/HomePage"
export const routes = [
    {
        path: '/',
        component: LoginPage,
        exact: true,
        auth: false
    }, {
        path: '/home',
        component: HomePage,
        exact: true,
        auth: true
    }
]