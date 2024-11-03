import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Account } from '../pages/Account'
import { Private } from '../pages/Private'

export const nav = [

    { path: "/", name: "Home", element: <Home />, isMenu: true, isPrivate: false },
    { path: "/about", name: "About", element: <About />, isMenu: true, isPrivate: false },
    { path: "/login", name: "Login", element: <Login />, isMenu: false, isPrivate: false},
    { path: "/account", name: "Account", element: <Account />, isMenu: true, isPrivate: true },
    { path: "/private", name: "Private", element: <Private />, isMenu: true, isPrivate: true }
]
export default nav