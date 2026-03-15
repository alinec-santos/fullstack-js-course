function TechCardItem(props) {
  return (
    <li className="bg-white/5 p-3 rounded-lg flex flex-col">
      <span>Technology: {props.name}</span>
      <span>Status: {props.status}</span>
      <span>Progress: {props.progress}</span>
    </li>
  );
}
export default TechCardItem;