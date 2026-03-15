import { useState } from "react";

function TechCard(){
    const [formData, setFormData] = useState({
        name: "",
        status: "",
        progress: ""
    });

    const [cards, setCards] = useState([]);

    // (e) é o evento do input.
    function handleChange(e) {
        const { name, value } = e.target;

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


    return(
    <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center pt-10">
        {/* Tasks section */}
    <div className="w-full max-w-md flex flex-col items-center gap-4">
      <h2 className="text-lg text-slate-300 font-medium tracking-wide">Tech Cards</h2>

      {/* Input */}
      <div className="flex gap-2 w-full">

        <input
          name= "name"
          className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
          placeholder="Technology name..."
          value={formData.name}
          onChange={handleChange}
          
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

      {/* cards list */}
      <ul className="w-full space-y-2">
        {cards.map((card) => (
            <TechCardItem
            key={card.id}
            name={card.name}
            status={card.status}
            progress={card.progress}
            />
        ))}
        </ul>
      </div>

      
    </div>
    </div>

    );
}

export default TechCard;