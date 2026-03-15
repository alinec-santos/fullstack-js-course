function TechCardItem(props) {

  // esse componente é responsável apenas por mostrar os dados de um card
  // ele recebe esses dados do componente pai (TechCard) através de props

  // aqui definimos cores diferentes dependendo do status
  let statusStyle = "bg-zinc-800 text-zinc-400 border-zinc-700";

  if (props.status === "studying") {
    statusStyle = "bg-blue-500/10 text-blue-400 border-blue-500/30";
  }

  if (props.status === "reviewing") {
    statusStyle = "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
  }

  if (props.status === "paused") {
    statusStyle = "bg-zinc-700/30 text-zinc-400 border-zinc-600";
  }

  if (props.status === "mastered") {
    statusStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
  }

  return (
    <li className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 p-4 rounded-xl flex items-center justify-between transition-all duration-200">

      {/* Dados do card — props.name, props.status e props.progress vieram do componente pai */}
      <div className="flex items-center gap-6">

        {/* Nome da tecnologia — destaque principal */}
        <span className="text-white font-semibold text-sm w-32 truncate">
          {props.name}
        </span>

        {/* Badge de status */}
        <span
          className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusStyle}`}
        >
          {props.status}
        </span>

        {/* Barra de progresso visual */}
        <div className="flex items-center gap-2 w-32">
          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">

            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(parseInt(props.progress) || 0, 100)}%` }}
            />

          </div>

          <span className="text-xs font-mono text-zinc-500 w-8 text-right">
            {props.progress}%
          </span>
        </div>

      </div>

      {/* Botão de deletar — chama a função deleteCards do componente pai via props.onDelete
          props.id identifica qual card deve ser removido */}
      <button
        className="text-zinc-700 hover:text-red-400 text-lg font-bold leading-none transition-colors opacity-0 group-hover:opacity-100"
        onClick={() => props.onDelete(props.id)}
        title="Remove"
      >
        ×
      </button>

    </li>
  );
}

export default TechCardItem;