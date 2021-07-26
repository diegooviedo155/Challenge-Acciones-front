import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react'
import Actions from './Pages/Actions';
import Home from './Pages/Home';
import Inicio from './Pages/Inicio';

function App() {
  const [dato, setDato] = useState({})
  const [user, setUser] = useState(null)
  const [idUser, setIdUser] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    const loggedUserJson = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJson) {
      const User = JSON.parse(loggedUserJson)
      setDato(User)
      setUser(User.session)
      setIdUser(User.id)
      setName(User.name)
      console.log(User)
    }
  }, [])

  return (
    <Fragment>
      <BrowserRouter >
        {
          !user ? (<Inicio logo="Stock Challenge" setDato={setDato} setUser={setUser} setIdUser={setIdUser} setName={setName} />) : (
            <Switch>
              <Route path='/inicio'>
                <Inicio logo="Stock Challenge" />
              </Route>

              <Route path='/actions'>
                <Actions />
              </Route>

              <Route path='/'>
                <Home logo="Mis Acciones" name={name} idUser={idUser} />
              </Route>

            </Switch>
          )
        }
      </BrowserRouter >
    </Fragment>
  );
}

export default App;
