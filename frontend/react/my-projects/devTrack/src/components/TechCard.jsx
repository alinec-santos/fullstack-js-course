import { useState } from "react";
import TechCardItem from "./TechCardItem";


function TechCard(){

    //estado do formulario, aqui usamos usestate para guardar os dados que o usuario digita
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        progress: ""
    });

    const [cards, setCards] = useState([]);

    /*Evento de input. essa funçao roda sempre qeu o usuario digita algo. Aqui usamos inputs controlados, pq o valor do input vem do estado */
    function handleChange(e) {
        //pegamos o nome do input e o valor digitado
        const { name, value } = e.target;

        //aqui atualizamos o estado do formulario
        //usamos spread(...) para manter a imutabilidade do estado
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }



    function addTechCard() {
        if(!formData.name.trim() || !formData.status.trim() || !formData.progress.trim()) return; //se algum campo estiver vazio, a função para 

        const newTechCard = {
            id: Date.now(),
            ...formData //copia todas as propriedades de formData
        };

        setCards ((prev)=> [...prev, newTechCard]);//isso cria imutabilidade. Copia os antigos + adiciona o novo

        setFormData({ //limpa o formulario
            name: "",
            status: "",
            progress: ""
        });

    }

    function deleteCards(id) {
        //usamos filter para criar um novo array sem o card clicado
    const filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
    }

    return(
    <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center pt-10">
        {/* Tasks section */}
    <div className="w-full max-w-md flex flex-col items-center gap-4">
      <h2 className="text-lg text-slate-300 font-medium tracking-wide">Tech Cards</h2>

      {/* Input */}
      <div className="flex gap-2 w-full">
        {/*input controlado. O valor vem do estado formData */}
        <input
          name= "name"
          className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
          placeholder="Technology name..."
          value={formData.name}
          onChange={handleChange} // evento onChange atualiza o estado
          
        />

        <input
          name= "status"
          className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
          placeholder="status..."
          value={formData.status}
          onChange={handleChange}
          
        />

        <input
          name= "progress"
          className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
          placeholder="progress..."
          value={formData.progress}
          onChange={handleChange}
          
        />
        <button
          className="px-5 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
          onClick={addTechCard}
        >
          Add a tech
        </button>

      {/* aqui usamos map para renderizar uma lista dinamica. Cada item precisa de uma Key unica para o react controlar a renderizaçao*/}
      <ul className="w-full space-y-2">
        {cards.map((card) => (
            //componetizaçao : em vezz de escrever o card aqui dentro, usamos um componente separado
            <TechCardItem
            key={card.id}
            id={card.id}
            name={card.name}
            status={card.status}
            progress={card.progress}

            //aqui estamos enviando uma funçao para o componente filho. Isso é comunicaçao entre os componentes usando props
            onDelete={deleteCards}
            
            />
            
        ))}
        </ul>
        
      </div>

      
    </div>
    </div>

    );
}

export default TechCard;