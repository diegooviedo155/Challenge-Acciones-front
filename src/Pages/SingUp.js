import React, { Fragment, useState } from 'react'


const SingUp = ({ logReg,
    setDatos,
}) => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [irA, setIrA] = useState(false)

    const login = (e) => {
        e.preventDefault();
        const requesInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }
        fetch('http://localhost:5000/auth/login', requesInit)
            .then(res => res.json())
            .then(res => setDatos(res))
            .catch((err) => alert(err.message))
    }

    const register = (e) => {
        e.preventDefault();
        const requesInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        }
        fetch('http://localhost:5000/auth/register', requesInit)
            .then(res => res.json())
            .then(res =>setIrA(true))
            .catch((err) => alert(err.message))
    }


    return (
        <Fragment>
            {
                (logReg||irA) ? (
                    <div className="container mt-5">
                        <div className="row  align-items-center justify-content-center">
                            <div className="card p-4 text-center mt-5 col-md-4 shadow-lg p-3 mb-5 bg-body rounded">
                                <form className="m-4">
                                    <div className="mb-3">
                                        <div className="form-label">Direccion de Email</div>
                                        <input type="email" className="form-control " id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label ">Contraseña</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={login}>Inicias Sesion</button>
                                </form>
                            </div>
                        </div>
                    </div>
                ) :
                    (
                        <div className="container mt-5">
                            <div className="row  align-items-center justify-content-center">
                                <div className="card p-4 text-center mt-5 col-md-4 shadow-lg p-3 mb-5 bg-body rounded">
                                    <form className="m-4">
                                        <div className="mb-3">
                                            <div className="form-label">Nombre</div>
                                            <input type="text" className="form-control " value={name} onChange={(e) => setName(e.target.value)} aria-describedby="nombreHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-label">Direccion de Email</div>
                                            <input type="email" className="form-control " value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label ">Contraseña</label>
                                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary" onClick={register} >Registrarse</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
            }
        </Fragment>
    );
}

export default SingUp;