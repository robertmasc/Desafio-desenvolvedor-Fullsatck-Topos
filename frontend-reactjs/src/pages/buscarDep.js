import { useState, useEffect } from 'react'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../components/buscar.css'
 
function BuscarDep() {

    const [posts, setPosts] = useState([])
    
    useEffect (() => {
        axios.get('http://localhost:3000/dependentes')
        .then((response) => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(() => {
            console.log("Algo de errado!")
        })
    }, [])


    function deleteFun (cod_funcionario) {
        const id = parseInt(cod_funcionario)
        axios.delete(`http://localhost:3000/dependente/1`)
        console.log(id)
        setPosts(posts.filter(post => post.cod_funcionario !== id))
    }

    return(
        <div>
            <Header/>

            <div className="Nav">   

                <Link to="/">
                    <button className="btn-voltar">Voltar</button>
                </Link>

                <h1>Lista de Dependentes</h1>

                {posts.map((post, key) => {
                    return(
                        
                        <div className="cardFun" >

                            <div className="gpField">
                                <h2 className="fieldCardFun">{"Código: "}</h2>
                                <h2 className="dataCardFun">{post.cod_funcionario}</h2>
                            </div>

                            <div className="gpField">   
                                <h2 className="fieldCardFun">{"Nome completo: "}</h2>
                                <h2 className="dataCardFun">{post.nome}</h2>
                            </div>

                            <div className="gpField">
                                <h2 className="fieldCardFun">{"Data de Nasc.: "}</h2>  
                                <h2 className="dataCardFun">{post.data_nascimento}</h2>
                            </div>

                            <div className="gpField">    
                                <h2 className="fieldCardFun">{"RG: "}</h2>
                                <h2 className="dataCardFun">{post.num_rg}</h2>
                            </div>    

                            <div className="gpField">    
                                <h2 className="fieldCardFun">{"CPF: "}</h2>
                                <h2 className="dataCardFun">{post.num_cpf}</h2>
                            </div>

                            <div className="gpField">        
                                <h2 className="fieldCardFun">{"Nome da Mãe: "}</h2>
                                <h2 className="dataCardFun">{post.nome_mae}</h2>
                            </div>

                            <Link to={{ pathname: `/editar/${post.cod_funcionario}`}}>
                                <button className="btn-edi-bus" >Editar</button>
                            </Link>

                            
                            <button onClick={() => deleteFun(post.cod_funcionario)} className="btn-exc-bus" >Excluir</button>
                            

                        </div>    
                               
                    )
                })}
            </div>)
        </div>
    )
}

export default BuscarDep;