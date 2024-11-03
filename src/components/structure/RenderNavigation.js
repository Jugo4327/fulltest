import {  Routes, Route, Link } from 'react-router-dom'
import { AuthData } from '../../auth/AuthWrapper'
import { nav } from './Navigation'

export const RenderRoutes = () => {

    const { values } = AuthData();
   
    return (
        <div className="nav">
            <Routes>
                {nav.map((r, i) => {
                    if (r.isPrivate && values.isAuthenticated) {

                        return <Route key={i} path={r.path} element={r.element} />
                    } else if (!r.isPrivate) {
                        return <Route key={i} path={r.path} element={r.element} />
                    } else
                        return true
                })

                }
            </Routes>
        </div>
    )


}

export const RenderMenu = () => {

    const { values, logout } = AuthData();

    const MenuItem = ({ r }) => {
        return (

            <div className="menuItem"> <Link to={r.path}>{r.name}</Link></div>
        )


    }
    return (
        <div className="menu">

            {nav.map((r, i) => {
                if (!r.isPrivate && r.isMenu) {

                    return (<MenuItem key={i} r={r} />)
                } else if (values.isAuthenticated && r.isMenu) {
                    return (<MenuItem key={i} r={r} />)
                } else return false
            })}

            {values.isAuthenticated ?
                <div className="menuItem"> <Link to={'#'} onClick={logout }>logout</Link></div>
                : 
                <div className="menuItem"> <Link to={'login'}>Login</Link></div>
            }

        </div>
    )


}