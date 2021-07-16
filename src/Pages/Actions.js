import React, { Fragment, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const Actions = ({ fav }) => {

    const [desde, setDesde] = useState('')
    const [interval, setInterval] = useState('')
    const [hasta, setHasta] = useState('')
    const [info, setinfo] = useState({})
    const [puntos,setPuntos] = useState({})

    const Desde = (e) => {
        e.preventDefault();
        setDesde(e.target.value)
    }
    const Hasta = (e) => {
        e.preventDefault();
        setHasta(e.target.value)
    }
    const Interval = (e) => {
        e.preventDefault();
        setInterval(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        await fetch(`https://api.twelvedata.com/time_series?symbol=${fav.symbol}&interval=${interval}&start_date=2021-06-16%2009:48:00&end_date=2021-06-16%2019:48:00&apikey=14bfba4a149f491bb0a72954a8365e27`)
            .then(res => res.json())
            .then(res => setinfo(res))
        // info.map(data=>{
        //     setPuntos(data.values.open)
        // })
    }
    const options = {
        series: [
            {
            name:'intervalos',
            data:[{
                info
            }]
        }
    ]
    }


    return (
        <Fragment>
            <form className="container mt-5" onSubmit={handleSubmit}>

                <div className="custom-control custom-radio my-4 form-check">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input me-2 form-check-input" />
                    <label className="custom-control-label" >Tiempo Real</label>
                </div>

                <div className="custom-control custom-radio mb-4 form-check d-flex align-items-center">
                    <input type="radio" id="customRadio2" className="custom-control-input me-2 form-check-input" />
                    <div className="d-flex flex-row bd-highlight " >
                        <div className="text-center align-middle py-2 me-3">Históricos</div>
                        <input type="date" id="start" name="trip-start"
                            value=""
                            onChange={Desde}
                            className="form-select me-3"
                            min="2021-01-01" max="2025-12-31"></input>
                        <input type="date" id="start" name="trip-start"
                            value=""
                            onChange={Hasta}
                            className="form-select"
                            min="2021-01-01" max="2025-12-31"></input>
                    </div>
                </div>

                <div className="d-flex">
                    <label className="me-3 " >Intervalo</label>
                    <select className="form-select col-sm-4" onChange={Interval}>
                        <option value="0"></option>
                        <option value="1min">1 min</option>
                        <option value="5min">5 min</option>
                        <option value="15min">15 min</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary col-4 col-sm-4 my-4" >Graficar</button>

            </form>

            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
                className=""
            />

        </Fragment>
    );
}

export default Actions;