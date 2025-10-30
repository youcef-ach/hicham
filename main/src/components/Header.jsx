import { Divider, Flex, Layout, Menu, Typography } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./header.css";

const { Title } = Typography;

const items = [
  {
    label: "categorie1",
    key: "categorie1",
  },
  {
    label: "categorie2",
    key: "categorie2",
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
    label: "categorie6",
    key: "categorie6",
  },
  {
    label: "categorie7",
    key: "categorie7",
  },
];

function App() {
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
            items={items}
            mode="horizontal"
            theme="light"
            defaultSelectedKeys={"categorie1"}
            className="catMenu noBO fullW"
          ></Menu>
        </Flex>
      </Layout.Header>
    </>
  );
}

export default App;