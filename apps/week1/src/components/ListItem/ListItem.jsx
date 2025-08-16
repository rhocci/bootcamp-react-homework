import './ListItem.css';

export default function ListItem({ key, title, children }) {
  return (
    <li key={key} className="list-item">
      <h3>{title}</h3>
      {children}
    </li>
  );
}
