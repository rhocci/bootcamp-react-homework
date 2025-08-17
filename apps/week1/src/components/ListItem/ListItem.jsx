import "./ListItem.css";

export default function ListItem({ title, children }) {
  return (
    <li className="list-item">
      <h3>{title}</h3>
      {children}
    </li>
  );
}
