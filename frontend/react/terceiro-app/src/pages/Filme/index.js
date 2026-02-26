import { useEffect,useState } from "react";
import { useParams,useNavigate, replace } from "react-router-dom";

import api from "../../service/api";
import './filme-info.css'

function Filme(){
    const{id}= useParams();
    const [filme, setFilme]= useState({});
    const [loading, setLoading]= useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadFilme() {
            await api.get(`/movie/${id}`,{ //promisse- busca os dados 
                params:{
                    api_key:'9b349d64ebdf9301c2b9eb5fe7c72e7f',
                    language: 'pt-BR',
                    
                }
            })
            .then((response)=>{ //caso a promisse dê certo cai no then
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{ //caso a promisse dê errado cai no catch
                console.log("Filme não encontrado")
                navigate("/",{replace:true}); //redirecionaar para a pagina home
                return;
            })
        }
        loadFilme();


        return()=>{
            console.log("Componente desmontado");
        }
    },[navigate,id])

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`}  alt={filme.title}/>
           <h3>Sinopse</h3>
           <span>{filme.overview}</span> {/*span é para organizar o texto*/}

           <strong>Avaliação: {filme.vote_average} / 10</strong>  {/*strong é para indicar que um texto é importante*/}

           <div className="area-buttons"> 
                <button>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                    {/*target para avisar que quer abrir o link em outra aba.*/ }
                </button>
           </div>
        </div>
    )
}

export default Filme;