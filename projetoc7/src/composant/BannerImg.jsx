import img from "../assets/images/imgAccueil.png";
const BannerImg = (props) => {
  const { title } = props;
  return (
    <div className="banner">
      <img src={img} alt="montagnes" className="bannerImg" />
      <div className="mask"></div>

      {title && <h1>{title}</h1>}
    </div>
  );
};

export default BannerImg;
