import React from 'react'
import './styles/global.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Cadastrar from './pages/cadastrar'
import CadastrarDep from './pages/cadastrarDep'
import Buscar from './pages/buscar'
import BuscarDep from './pages/buscarDep'
import Editar from './pages/editar'


function App() {

  return(

    //Rotas das páginas

    <Router>

      <Switch>

        <Route exact path="/" component={Dashboard} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/cadastrarDep" component={CadastrarDep} />
        <Route path="/buscar/" component={Buscar} />
        <Route path="/buscarDep/" component={BuscarDep} />
        <Route path="/editar" component={Editar} />

      </Switch>
      
    </Router>
  )
}   
    
export default App;
