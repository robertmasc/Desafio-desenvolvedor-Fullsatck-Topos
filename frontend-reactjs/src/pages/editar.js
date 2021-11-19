import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useHistory, useParams} from 'react-router-dom'
import Header from '../components/header'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import '../components/editar.css'

function Editar() {

    const {cod_funcionario} = useParams()

    let history = useHistory()

    useEffect (() => {
        axios.get(`http://localhost:3000/funcionarios/${cod_funcionario}`)
        .then((response) => {
            console.log(response.data)
            reset(response.data)
        })
        .catch(() => {
            console.log("Algo de errado!")
        })
    }, [])

    const {register, handleSubmit, reset} = useForm({})

    const cad = dados => axios.put(`http://localhost:3000/funcionario/${cod_funcionario}`, dados)
    .then(()=> {
        console.log("Ok")
        alert("Funcionário cadastrado com sucesso!")
        history.push("/")
    })
    .catch(()=>{
        console.log("algo de errado!")
    })
    
    return(
        <div>
            <Header/>
            
            <Link to="/">
                <button className="btn-voltar">Voltar</button>
            </Link>

            <div className="Nav">

                <h1>Cadastrar Funcionário</h1>
                
                <main>
                    <div className="cad-fun">

                        <form onSubmit={handleSubmit(cad)}>

                            <div className="form-cad">
                                <label>Nome Completo</label>
                                <input type="text" name="nome" {...register("nome")}/>
                                
                            </div>

                            <div className="form-cad">
                                <label>Data de Nascimento</label>
                                <input type="text"name="data_nascimento" {...register("data_nascimento")}/>
                                
                            </div>

                            <div className="form-cad">
                                <label>RG</label>
                                <input type="text"name="num_rg" {...register("num_rg")}/>
                                
                            </div>

                            <div className="form-cad">
                                <label>CPF</label>
                                <input type="text"name="num_cpf" {...register("num_cpf")}/>
                                
                            </div>

                            <div className="form-cad">
                                <label>Nome da Mãe</label>
                                <input type="text"name="nome_mae" {...register("nome_mae")}/>
                                
                            </div>
                             

                            <div className="btn-cad-fun">
                                <button className="btn-cad-fun-cad" type="submit">Cadastrar</button>
                                <button className="btn-cad-fun-lim" type="reset">Limpar</button>
                            </div>

                        </form>
                    </div>
                </main>
            </div> 
        </div>
    )
}
    
export default Editar