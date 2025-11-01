import { Flex, Typography } from "antd";
import "./tendance.css";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function Tendance() {

  const redirect = useNavigate()
  
  return (
    <>
      <Flex justify="center" align="center" gap={15} className="tendanceFlex">
        <ProductCard
          args={{
            src: p1,
            title: "The Dancy chair",
            price: 250,
          }}
        />
        <ProductCard
          args={{
            src: p4,
            title: "The Lucy Lamp",
            price: 399,
          }}
        />
        <ProductCard
          args={{
            src: p2,
            title: "Rustic Vase Set",
            price: 156,
          }}
        />
        <ProductCard
          args={{
            src: p3,
            title: "The Siky Vase",
            price: 125,
          }}
        />
      </Flex>
      <Typography.Text
        className="tendanceView darkPrimary"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          redirect("/all_products");
        }}
      >
        View collection
      </Typography.Text>
    </>
  );
}

export default Tendance;
