function TechCardItem(props) {
  return (
    <li className="bg-white/5 p-3 rounded-lg flex flex-col">
      <span>Technology: {props.name}</span>
      <span>Status: {props.status}</span>
      <span>Progress: {props.progress}</span>

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