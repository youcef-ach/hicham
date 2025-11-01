import { Divider, Flex, Layout, Menu, Typography } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const { Title } = Typography;

const items = [
  {
    label: <Link to="/home">Home</Link>,
    key: "home",
  },
  {
    label: <Link to="/about">About</Link>,
    key: "about",
  },
  {
    label: "categorie3",
    key: "categorie3",
  },
  {
    label: "categorie4",
    key: "categorie4",
  },
  {
    label: "categorie5",
    key: "categorie5",
  },
  {
    label: <Link to="/all_products">all_products</Link>,
    key: "all_products",
  },
];

function App() {
  let defaultSelectedKeys = "";
  const { pathname } = useLocation();
  if (pathname.startsWith("/h")) defaultSelectedKeys = "home";
  else if (pathname.startsWith("/about")) defaultSelectedKeys = "about";
  else if (pathname.startsWith("/all")) defaultSelectedKeys = "all_products";
  else if (pathname.startsWith("/product")) defaultSelectedKeys = "";

  return (
    <>
      <Layout.Header className="header">
        <Flex vertical justify="center">
          <Flex className="fullHW headerFlex">
            <SearchOutlined className="headerIcons" />
            <Title className="logo">HDECO</Title>
            <Flex className="headerRightFlex">
              <ShoppingCartOutlined className="headerIcons" />
              <UserOutlined className="headerIcons" />
            </Flex>
          </Flex>
          <div className="dividerCont">
            <Divider />
          </div>
          <Menu
            onChange={(a) => console.log(a)}
            items={items}
            mode="horizontal"
            theme="light"
            defaultSelectedKeys={defaultSelectedKeys}
            className="catMenu noBO fullW"
          ></Menu>
        </Flex>
      </Layout.Header>
    </>
  );
}

export default App;
