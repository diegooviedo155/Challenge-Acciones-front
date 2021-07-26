import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';
import SingUp from './SingUp';

const Inicio = ({ logo ,
    setDato,
    setUser,
    setIdUser,
    setName 
}) => {
    
    
    const [datos,setDatos] = useState({})
    
    const loginRegister = true
    const [singIn, setSingIn] = useState(true)
    const [logReg, setLogReg] = useState(true)

    useEffect(() => {
        setUser(datos.session)
        setIdUser(datos.id)
        setName(datos.name)
        setDato(datos)
    }, [datos])

    return (
        <Fragment>
            <Navbar brand={logo} loginRegister={loginRegister} setSingIn={setSingIn} setLogReg={setLogReg} setUser={setUser}/>
            {
                !singIn ? (
                
                    <SingUp logReg={logReg} setDatos={setDatos} datos={datos}/>
                
                ) 
                : (
                    <div className="container">
                        <div className="text-center mt-5 row align-items-center">
                            <h1 className="fs-1 mt-5">Challenge Acciones</h1>
                            <h4 className="mb-5">Prueba tecnica </h4>
                            <h2 className="my-5 fs-1 ">Bienvenidos</h2>
                            <h2 className="mt-5 animated bounce">Soy Diego Alejandro Oviedo</h2>
                        </div>
                    </div>
                )
            }

        </Fragment>
    );
}

export default Inicio;