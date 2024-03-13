import Card, { Header } from "../common";
import { useSelector } from "react-redux";
import type { storeT, ItemT } from "../store";

export default function Dashboard() {
  const Favlist = useSelector((state: storeT) => {
    return state?.list?.list.filter((item: ItemT) => item.favorite);
  });

  return (
    <div>
      <Header to="/list" toPath="List" title="DashBoard" />
      {Favlist && Favlist.length < 1 && "No favorite element."}
      <ul className="ul">
        {Favlist &&
          Favlist.map((item: ItemT) => {
            return <Card key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
}
