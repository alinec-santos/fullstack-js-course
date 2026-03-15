function TechCardItem(props) {

  // esse componente é responsavel apenas por mostrar os dados de um card
  // ele recebe esses dados do componente pai (TechCard) atraves de props

  return (
    <li className="bg-white/5 p-3 rounded-lg flex flex-col">

      {/* aqui mostramos os dados que vieram pelas props */}
      {/* props.name, props.status e props.progress foram enviados pelo componente pai */}
      <span>Technology: {props.name}</span>
      <span>Status: {props.status}</span>
      <span>Progress: {props.progress}</span>

      {/* botão para deletar o card */}
      {/* quando o usuario clica, ele chama a função que veio do componente pai */}
      {/* props.onDelete é a função deleteCards que está no TechCard */}
      {/* props.id é o id do card que precisa ser removido */}
      <button
        className="text-red-400 hover:text-red-300 mt-2"
        onClick={() => props.onDelete(props.id)}
      >
        ×
      </button>

    </li>
  );
}

export default TechCardItem;