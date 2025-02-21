import { useState, useEffect } from 'react'
import Header from '../components/header'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../components/buscar.css'
 
function Buscar() {

    const [posts, setPosts] = useState([])

    //Função GET para buscar cadastros
    
    useEffect (() => {
        axios.get('http://localhost:3000/funcionarios')
        .then((response) => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(() => {
            console.log("Algo de errado!")
        })
    }, [])

    //Função deletar funcionário

    function deleteFun (id) {
        axios.delete(`http://localhost:3000/funcionario/${id}`)
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

                <h1>Lista de Funcionários</h1>

                {posts.map((post, key) => {
                    return(

                        //Card listar funcionários cadastrados
                        
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

export default Buscar;