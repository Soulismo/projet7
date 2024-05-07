import BannerImg from "../composant/BannerImg";
import Gallery from "../composant/Gallery";

function Home() {
  return (
    <div className="home">
      <BannerImg title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
