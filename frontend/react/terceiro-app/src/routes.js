import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Header from './components/header';
import Erro from './pages/Erro';
function RoutesApp(){
    return(
       /*Browser - ativa o sistema de rotas
       Header- é o componente que vai aparecer em todas as páginas 
       Routes- é onde se declara quais caminhos levam para quais componentes

       IMPORTANTE: /filme/:id -  significa parâmetro dinâmico. O número pode mudar. 
       */ 
        <BrowserRouter> 
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/filme/:id' element={<Filme/>}/>


                <Route path='*' element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
