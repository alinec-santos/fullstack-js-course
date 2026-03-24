import { useState, useEffect } from "react";
import TechCardItem from "../components/TechCardItem";

function TechCard() {

   const [cards, setCards] = useState([]);
  // estado do formulario, aqui usamos usestate para guardar os dados que o usuario digita
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    progress: ""
  });

  useEffect(()=>{ //roda uma vez quando o componente carrega 
    fetch("http://localhost:8080/tasks") //chama a API
    .then((response)=>response.json()) //transforma a resposta em objeto JS
    .then((data)=> setCards(data)) // atualiza o estado com o que veio do back
    .catch((error) =>console.error("erro ao buscar tass: ", error));
  })

 

  /* Evento de input. essa função roda sempre que o usuario digita algo.
     Aqui usamos inputs controlados, pq o valor do input vem do estado */
  function handleChange(e) {
    // pegamos o nome do input e o valor digitado
    const { name, value } = e.target;

    // aqui atualizamos o estado do formulario
    // usamos spread(...) para manter a imutabilidade do estado
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  async function addTechCard() {
    if (!formData.name.trim() || !formData.status.trim() || !formData.progress.trim()) return;

    try {
      const response = await fetch("http://localhost:8080/tasks", { //envia para i back
        method: "POST",
        headers: {
          "Content-Type": "application/json" //diz que estou mandando json
        },
        body: JSON.stringify(formData) //transforma o objeto js em json
      });

      const newTask = await response.json();

      setCards((prev) => [...prev, newTask]); //atualiza a tela

      setFormData({
        name: "",
        status: "",
        progress: ""
      });
    } catch (error) {
      console.error("Erro ao criar task:", error);
    }
  } 

  async function deleteCards(id) {
    try {
      await fetch(`http://localhost:8080/tasks/${id}`, { //manda a requisiçao para o back
        method: "DELETE"
      });

      setCards((prev) => prev.filter((card) => card.id !== id)); //remove do estado local depois que o back aceitou
    } catch (error) {
      console.error("Erro ao deletar task:", error);
    }
  }


  //mostrar o total de tecnologias
  const total = cards.length;

  //quantidade por status
  const studying = cards.filter(card=>card.status === "studying").length;
  const reviewing = cards.filter (card=> card.status === "reviewing").length;
  const mastered = cards.filter(card=> card.status === "mastered").length;
  const paused = cards.filter(card=> card.status ===  "paused").length;

  //média do progresso 
  const average = 
    total === 0
      ? 0
      : Math.round(
          cards.reduce((acc,card)=> acc + Number(card.progress || 0),0) / total
      );//reduce acumula todos os valores em um único resultado.
  return (
    <div className="bg-zinc-950 min-h-screen text-white flex flex-col px-4 md:px-12 py-16">
      {/* dashboard de resumo */}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          <p className="text-xs text-zinc-500">Total</p>
          <h2 className="text-xl font-bold">{total}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          <p className="text-xs text-zinc-500">Studying</p>
          <h2 className="text-xl font-bold text-blue-400">{studying}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          <p className="text-xs text-zinc-500">Reviewing</p>
          <h2 className="text-xl font-bold text-blue-400">{reviewing}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          <p className="text-xs text-zinc-500">Paused</p>
          <h2 className="text-xl font-bold text-blue-400">{paused}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          <p className="text-xs text-zinc-500">Mastered</p>
          <h2 className="text-xl font-bold text-emerald-400">{mastered}</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
          <p className="text-xs text-zinc-500">Avg Progress</p>
          <h2 className="text-xl font-bold text-yellow-400">{average}%</h2>
        </div>

      </div>

      {/* Container principal ocupa toda a largura */}
      <div className="w-full flex flex-col gap-10">

        {/* Cabeçalho */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">stack tracker</span>
          <h1 className="text-5xl font-bold text-white tracking-tight">Tech Cards</h1>
          <div className="w-10 h-0.5 bg-emerald-500 mt-1 rounded-full" />
        </div>

        {/* Formulário de adição */}
        <div className="flex flex-col gap-3">

          {/* Linha de inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Input controlado — valor vem do estado formData */}
            <input
              name="name"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-base placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Technology"
              value={formData.name}
              onChange={handleChange} // evento onChange atualiza o estado
            />

            <select
              name="status"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-base placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Status"
              value={formData.status}
              onChange={handleChange}
            >
              {/* opção inicial vazia */}
              <option value="">Select status</option>

              <option value="studying">Studying</option>
              <option value="reviewing">Reviewing</option>
              <option value="paused">Paused</option>
              <option value="mastered">Mastered</option>

            </select>
            
            <input
              name="progress"
              className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-base placeholder-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Progress"
              value={formData.progress}
              onChange={handleChange}
            />
          </div>

          {/* Botão de adição */}
          <button
            className="self-end px-8 py-4 bg-emerald-500 text-zinc-950 rounded-xl text-base font-bold tracking-wide hover:bg-emerald-400 active:scale-95 transition-all"
            onClick={addTechCard}
          >
            + Add tech
          </button>
        </div>

        {/* Divisor com contagem de cards */}
        {cards.length > 0 && (
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-zinc-800" />
            <span className="text-xs text-zinc-500 font-mono">{cards.length} {cards.length === 1 ? "item" : "items"}</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
        )}

        {/* Lista de cards
            aqui usamos map para renderizar uma lista dinâmica.
            Cada item precisa de uma key única para o React controlar a renderização */}
        <ul className="flex flex-col gap-3">
          {cards.map((card) => (
            // componentização: em vez de escrever o card aqui, usamos um componente separado
            <TechCardItem
              key={card.id}
              id={card.id}
              name={card.name}
              status={card.status}
              progress={card.progress}
              // aqui enviamos a função para o componente filho — comunicação entre componentes via props
              onDelete={deleteCards}
            />
          ))}
        </ul>

        {/* Estado vazio — só aparece quando não há cards */}
        {cards.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 gap-2 text-zinc-700">
            <span className="text-4xl"></span>
            <span className="text-sm font-mono">no techs added yet</span>
          </div>
        )}

      </div>
    </div>
  );
}

export default TechCard;