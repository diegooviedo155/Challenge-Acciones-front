import React from 'react'


const Favorites = ({ favs, setActlualizar, setAcc, setfav}) => {
    
    
    const handleDelete = (id)=> {
        const requesInit={
            method: 'DELETE'
        }
        fetch('http://localhost:5000/favorites/' + id, requesInit)
            .then(res=>res.json())
            .then(res=>console.log(res))
        setActlualizar(true)
    }
    
    const irA = ({fav}) => {
        setAcc(true)
        setfav(fav)
    }

    return (
        <table className="table">
            <thead>
                <tr className="table-dark">
                    <th>Simnolo</th>
                    <th>Nombre</th>
                    <th>Moneda</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    favs.map(fav => (
                        <tr key={fav.id}>
                            <td><button type="button" className="btn btn-outline-dark border border-0" onClick={()=>irA({fav})}>{fav.symbol}</button></td>
                            <td>{fav.name}</td>
                            <td>{fav.currency}</td>
                            <td><button type="button" className="btn btn-outline-danger btn-sm border border-0" onClick={()=>handleDelete(fav.id)}>Eliminar</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Favorites;