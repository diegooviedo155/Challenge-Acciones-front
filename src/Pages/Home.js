import React, { Fragment, useEffect, useState } from 'react'
import Favorites from '../Components/Favorites'
import Navbar from '../Components/Navbar'
import Actions from './Actions'

const Home = ({ logo, name, idUser }) => {
    const [stocks, setStocks] = useState([])
    const [stock, setStock] = useState([])
    const [favs, setfavs] = useState([])
    const [fav, setfav] = useState([])
    const [actualizar, setActlualizar] = useState(false)
    const [acc, setAcc] = useState(false)

    useEffect(() => {
        const getFavs = () => {
            fetch('http://localhost:5000/favorites')
                .then(res => res.json())
                .then(res => setfavs(res))
        }

        const getStocks = () => {
            fetch('http://localhost:5000/info')
                .then(res => res.json())
                .then(res => setStocks(res))
        }
        getFavs()
        getStocks()
        setActlualizar()
    }, [actualizar])

    const handleCargaStock = (e) => {
        e.preventDefault();
        const selected = e.target.value
        const selectedState = stocks.filter(sto => sto.symbol === selected)[0]
        setStock({ "idUser": idUser, ...selectedState })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const requesInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(stock)
        }
        fetch('http://localhost:5000/favorites', requesInit)
            .then(res => res.json())
            .then(res => console.log(res))
        setActlualizar(true)
        setStock([])
    }

    return (
        <Fragment>
            {
                !acc ? (
                    <div>
                        <Navbar brand={logo} name={name} />
                        <div className="container pt-5 mt-5" >
                            <div className="row">
                                <div className="col-7">
                                    <form className="mb-5" onSubmit={handleSubmit}>
                                        <div className="mb-3 row ">
                                            <label className="col-4 col-lg-2">Simbolo: </label>
                                            <div className="col row gap-5">
                                                <select id="disabledSelect" className="form-select col" onChange={handleCargaStock}>
                                                    <option>(Autocomplete)</option>
                                                    {stocks.map((s, i) => (<option value={s.id} key={"stock" + i}>{s.symbol}</option>))
                                                    }
                                                </select>
                                                <button type="submit" className="btn btn-primary col-4 col-sm-4" >Agregar Simbolo</button>
                                            </div>
                                        </div>
                                    </form>
                                    <Favorites favs={favs} setfav={setfav} setActlualizar={setActlualizar} setAcc={setAcc} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <Navbar brand={fav.name} name={name} />
                        <Actions fav={fav} />
                    </div>
                )
            }
        </Fragment>
    );
}

export default Home;