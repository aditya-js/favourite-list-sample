import { type ItemT } from "./store";
import { Link } from "react-router-dom";

type CardT = {
  item: ItemT;
  handleClick?: (item: ItemT) => void;
};

export default function Card({ item, handleClick }: CardT) {
  return (
    <li className="list">
      <div className="card">
        <div>{item.id}</div>
        <img src={item.url} height="100px" />
        <div>{item.title}</div>
        <button
          className={item.favorite ? "button-fav" : "button"}
          onClick={() => handleClick && handleClick(item)}
        >
          {item.favorite ? "Favorite" : "Add to Favorite"}
        </button>
      </div>
    </li>
  );
}

export function Header({
  to,
  toPath,
  title,
}: {
  to: string;
  toPath: string;
  title: string;
}) {
  return (
    <div className="header">
      <span className="header-title">{title}</span>
      <Link className="link" to={to}>
        {toPath}
      </Link>
    </div>
  );
}
