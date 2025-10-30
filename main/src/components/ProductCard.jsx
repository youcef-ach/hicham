import { Flex, Typography } from "antd";
import "./productCard.css";

function ProductCard({ args }) {
  return (
    <Flex
      vertical
      justify="center"
      align="start"
      gap={24}
      className="productCard"
    >
      <img src={args.src} className="fullW" />
      <Flex vertical justify="center" align="start" gap={8}>
        <Typography.Title className="title darkPrimary noMP">
          {args.title}
        </Typography.Title>
        <Typography.Text className="price darkPrimary">
          {args.price}$
        </Typography.Text>
      </Flex>
    </Flex>
  );
}

export default ProductCard;