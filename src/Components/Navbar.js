import React from 'react'
import { Redirect } from 'react-router-dom'

const Navbar = ({ brand, loginRegister, name, setSingIn, setLogReg, setUser}) => {
    const singIn = () => {
        setSingIn(false)
        setLogReg(true)
    }

    const register = () => {
        setSingIn(false)
        setLogReg(false)
    }
    const home = () => {
        setSingIn(true)
    }
    const logout = () => {
        window.localStorage.removeItem('loggedAppUser')
        // {<Link to="/inicio"/>}
        // return Redirect("/inicio")
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/" onClick={home} className="navbar-brand">{brand}</a>
                {
                    loginRegister ? (
                        <div className="row gap-3">
                            <button onClick={singIn} className="btn btn-sm btn-outline-secondary col" type="button">Login</button>
                            <button onClick={register} className="btn btn-sm btn-outline-secondary col" type="button">Register</button>
                        </div>
                    ) : (
                        <div className="">
                            <span className="navbar-text mx-5">Usuario: {name}</span>
                            <a href="/" onClick={logout} className="btn btn-sm btn-outline-danger" type="button">Salir</a>
                        </div>
                    )
                }
            </div>
        </nav >
    );
}

export default Navbar;
