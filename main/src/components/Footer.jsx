import { Layout, Flex, Typography, Divider } from "antd";
import "./footer.css";
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled,
  SkypeFilled,
  TwitterOutlined,
  PinterestFilled,
} from "@ant-design/icons";

function Footer() {
  return (
    <Layout.Footer className="footerCont">
      <Flex justify="space-between" align="start">
        <Flex vertical justify="center" gap={12}>
          <Typography.Title className="title">Menu</Typography.Title>
          <Typography.Text className="text">New arrivals</Typography.Text>
          <Typography.Text className="text">Best sellers</Typography.Text>
          <Typography.Text className="text">Recently Viewed</Typography.Text>
          <Typography.Text className="text">Popular this week</Typography.Text>
          <Typography.Text className="text">All products</Typography.Text>
        </Flex>
        <Flex vertical justify="center" gap={12}>
          <Typography.Title className="title">Categories</Typography.Title>
          <Typography.Text className="text">Cateforie1</Typography.Text>
          <Typography.Text className="text">Cateforie2</Typography.Text>
          <Typography.Text className="text">Cateforie3</Typography.Text>
          <Typography.Text className="text">Cateforie4</Typography.Text>
          <Typography.Text className="text">Cateforie5</Typography.Text>
          <Typography.Text className="text">Cateforie6</Typography.Text>
        </Flex>
        <Flex vertical justify="center" gap={12}>
          <Typography.Title className="title">Our company</Typography.Title>
          <Typography.Text className="text">About us</Typography.Text>
          <Typography.Text className="text">Contact us</Typography.Text>
          <Typography.Text className="text">Returns policy</Typography.Text>
        </Flex>
        <Flex vertical justify="center" gap={12} className="reach">
          <Typography.Title className="title">Reach to us</Typography.Title>
        </Flex>
      </Flex>
      <Divider style={{ borderColor: "#4E4D93", marginTop: 40 }} />
      <Flex justify="space-between" align="center">
        <Typography.Title className="title">
          Copyright 2025 HDECO
        </Typography.Title>
        <Flex justify="center" align="center" gap={24}>
          <FacebookFilled className="social" style={{ color: "white" }} />
          <InstagramFilled className="social" style={{ color: "white" }} />
        </Flex>
      </Flex>
    </Layout.Footer>
  );
}

export default Footer;