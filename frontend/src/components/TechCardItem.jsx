function TechCardItem(props) {
  let statusStyle = "bg-zinc-800 text-zinc-400 border-zinc-700";

  if (props.status === "studying") statusStyle = "bg-blue-500/10 text-blue-400 border-blue-500/30";
  if (props.status === "reviewing") statusStyle = "bg-yellow-500/10 text-yellow-400 border-yellow-500/30";
  if (props.status === "paused") statusStyle = "bg-zinc-700/30 text-zinc-400 border-zinc-600";
  if (props.status === "mastered") statusStyle = "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";

  return (
  <li className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/40 p-6 rounded-2xl flex items-center justify-between transition-all duration-200">

    {/* Nome — lado esquerdo */}
    <span className="text-white font-bold text-lg w-1/3 truncate">
      {props.name}
    </span>

    {/* Badge de status — centro */}
    <span className={`text-sm font-mono px-4 py-1.5 rounded-full border ${statusStyle}`}>
      {props.status}
    </span>

    {/* Progresso — lado direito */}
    <div className="flex items-center gap-3 w-1/3 justify-end">
      <div className="flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
          style={{ width: `${Math.min(parseInt(props.progress) || 0, 100)}%` }}
        />
      </div>
      <span className="text-sm font-mono text-zinc-400 w-10 text-right">
        {props.progress}%
      </span>
    </div>

    {/* Botão deletar */}
    <button
      className="text-zinc-700 hover:text-red-400 text-2xl font-bold leading-none transition-colors opacity-0 group-hover:opacity-100 ml-4"
      onClick={() => props.onDelete(props.id)}
      title="Remove"
    >
      ×
    </button>

  </li>
  );
}

export default TechCardItem;