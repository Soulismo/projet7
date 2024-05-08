import { useNavigate, useParams } from "react-router-dom";
import locations from "../data/location.json";
import React, { useEffect, useState } from "react";

function Location() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const index = locations.findIndex((item) => item.id === id);
    if (index < 0) {
      navigate("/404");
    }
    setLogement(locations[index]);
    setLoading(false);
  }, []);
  const nextImage = () => {
    if (index + 1 > logement.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <h1>{logement.title}</h1>
      <div>{logement.pictures[index]}</div>
      <button onClick={() => setIndex(index - 1)}>precedent</button>
      <button onClick={nextImage}>suivant</button>
    </div>
  );
}

export default Location;
