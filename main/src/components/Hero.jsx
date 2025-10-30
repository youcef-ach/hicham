import { Typography } from "antd";
import heroImg from "../assets/images/hero.png";
import "./hero.css";

function Hero() {
  return (
    <div className="heroCont fullW">
      <img src={heroImg} className="heroImg fullHW" />
      <div className="heroCard border">
        <Typography.Title level={3} className="title">
          Luxury homeware for people who love timeless design quality
        </Typography.Title>
        <Typography.Text className="text2">
          Shop the new Spring 2022 collection today
        </Typography.Text>
        <Typography.Text className="text3">View collection</Typography.Text>
      </div>
    </div>
  );
}

export default Hero;
