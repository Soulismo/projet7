import BannerImg from "../composant/BannerImg";
import React from "react";
import logements from "../data/location.json";
import { Link } from "react-router-dom";
const Array = [
  { title: "projet1", id: 1 },
  { title: "projet2", id: 2 },
];
function Home() {
  return (
    <div className="home">
      <BannerImg title="Chez vous, partout et ailleurs" />
      {logements.map((item, i) => (
        <Link to={"/location/" + item.id} key={item.id}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Home;
