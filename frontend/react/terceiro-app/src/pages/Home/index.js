import { useEffect, useState } from "react";
import api from '../../service/api'
import {Link} from 'react-router-dom';
import './home.css';

//effect - para sempre que o usuario entrar mostre os filmes. 
//state - para armazenar em algum estado os filmes

//url: /movie/now_playing?api_key=9b349d64ebdf9301c2b9eb5fe7c72e7f


function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes() { //async vai lidar com algo que demora a acontecer. E para nao estagnar o codigo , usamos ela.
            const response =  await api.get("movie/now_playing",{ //await - serve para pausar a execução de uma função assíncrona
                params:{
                    api_key:'9b349d64ebdf9301c2b9eb5fe7c72e7f',
                    language: 'pt-BR',
                    page:1,
                }
            })//Espere a resposta de uma requisição GET e guarde o resultado na variável response

            setFilmes(response.data.results.slice(0,10))
            setLoading(false); //ate pegar todos os filmes será true, quando pegar, mudamos a variavel para false. 
            
        }
        loadFilmes();

    },[])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filme....</h2>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}> {/*Define um conteúdo independente, autônomo e reutilizável  */}
                            <strong>{filme.title}</strong> {/* Indica que o texto dentro dela tem alta importância, seriedade ou urgência. */}
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}  alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })} {/*map para percorrer a lista de filmes*/ }
            </div>
        </div>
    )
}

export default Home;