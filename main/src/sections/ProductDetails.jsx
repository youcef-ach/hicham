import { Button, Divider, Flex, InputNumber, Typography } from "antd";
import { useLoaderData } from "react-router-dom";
import "./details.css";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import ProductCard from "../components/ProductCard";
import Brand from "../components/Brand";
import brand2 from "../assets/images/brand2.png";

function ProductDetails() {
  const product = useLoaderData();

  return (
    <>
      <Flex
        className="fullW detailsFlex"
        justify="center"
        align="start"
        gap={20}
        style={{ padding: 56 }}
      >
        <div className="detailsImgCont">
          <img src={product.src} className="fullW" style={{ maxHeight: 700 }} />
        </div>
        <Flex vertical style={{ padding: 24 }} className="rightDetails">
          <Typography.Title className="mainTitle noMP">
            {product.title}
          </Typography.Title>
          <Typography.Text className="price">{product.price}</Typography.Text>
          <Divider />
          <Typography.Title className="descTitle">
            Product description
          </Typography.Title>
          <Typography.Text className="desc">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The dandy chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </Typography.Text>
          <Typography.Title className="desc" style={{ marginBottom: 24 }}>
            Dimensions
          </Typography.Title>
          <Flex justify="start">
            <Typography.Text className="dim">Height</Typography.Text>
            <Typography.Text className="dim">Width</Typography.Text>
            <Typography.Text className="dim">Depth</Typography.Text>
          </Flex>
          <Flex justify="start">
            <Typography.Text className="dim">110cm</Typography.Text>
            <Typography.Text className="dim">75cm</Typography.Text>
            <Typography.Text className="dim">50cm</Typography.Text>
          </Flex>
          <Typography.Title className="desc" style={{ marginBottom: 16 }}>
            Quantity
          </Typography.Title>
          <InputNumber />
          <Button className="addBtn">Add to card</Button>
        </Flex>
      </Flex>
      <Typography.Title className="might noMP">
        You might also like these
      </Typography.Title>
      <Flex
        justify="center"
        align="start"
        gap={20}
        style={{ padding: "0 56px" }}
      >
        <ProductCard
          args={{
            src: p1,
            title: "The Dancy chair",
            price: "250 dzd",
          }}
        />
        <ProductCard
          args={{
            src: p4,
            title: "The Lucy Lamp",
            price: "399 dzd",
          }}
        />
        <ProductCard
          args={{
            src: p2,
            title: "Rustic Vase Set",
            price: "156 dzd",
          }}
        />
        <ProductCard
          args={{
            src: p3,
            title: "The Siky Vase",
            price: "125 dzd",
          }}
        />
      </Flex>
      <Flex justify="center" style={{ marginTop: 36 }}>
        <Button className="addBtn" style={{ margin: "auto" }}>
          See All Products
        </Button>
      </Flex>
      <Brand />
      <Flex
        justify="center"
        className="startedFlex fullW"
        style={{ padding: 0 }}
      >
        <img src={brand2} className="startedImg" />
        <Flex
          justify="space-between"
          align="start"
          vertical
          className="startedCard"
          style={{ backgroundColor: "white", color: "#2a254b" }}
        >
          <Flex vertical justify="center" gap={12}>
            <Typography.Title className="title" style={{ color: "#2a254b" }}>
              It started with a small idea
            </Typography.Title>
            <Typography.Text className="text" style={{ color: "#2a254b" }}>
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </Typography.Text>
          </Flex>
          <Typography.Text
            className="startedView"
            style={{ backgroundColor: "#2a254b" }}
          >
            View collection
          </Typography.Text>
        </Flex>
      </Flex>
    </>
  );
}

export default ProductDetails;
