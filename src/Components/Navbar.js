import React from 'react'

const Navbar = ({ brand, loginRegister, name, setSingIn, setLogReg}) => {
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
                            {/* `<button onClick={singUp} className="btn btn-sm btn-outline-secondary" type="button">Salir</button> */}
                        </div>
                    )
                }
            </div>
        </nav >
    );
}

export default Navbar;
