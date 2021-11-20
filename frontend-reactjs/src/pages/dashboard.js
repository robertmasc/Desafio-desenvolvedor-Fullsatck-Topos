import React from 'react'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import '../components/dashboard.css'

function Dashboard() {

    return(

        <div>

            <Header/>

                <div className="Nav">
                
                    <h1>Dashboard</h1>
                
                    <div className="btns-nav">

                        <Link to="/cadastrar">
                            <button className="btn-cad" >Cadastrar</button>
                        </Link>
                        <Link to="/buscar">
                            <button className="btn-bus" >Listar Funcionarios</button>
                        </Link> 
                        <Link to="/buscarDep">
                            <button className="btn-bus" >Listar Dependentes</button>
                        </Link>  

                    </div>

                </div>
                
        </div>
    )
}

export default Dashboard