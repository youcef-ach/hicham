import { Layout } from "antd";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./sections/Landing";
import Footer from "./components/Footer";
import AllProducts from "./sections/AllProducts";
import ProductDetails from "./sections/ProductDetails";
import p1 from "./assets/images/p1.png";
import p2 from "./assets/images/p2.png";
import p3 from "./assets/images/p3.png";
import p4 from "./assets/images/p4.png";
import p5 from "./assets/images/p5.png";
import p6 from "./assets/images/p6.png";
import p7 from "./assets/images/p7.png";
import p8 from "./assets/images/p8.png";
import p9 from "./assets/images/p9.png";
import About from "./sections/About";
import HeaderWrapper from "./components/HeaderWrapper";

const products = [
  {
    id: 1,
    title: "Product1",
    price: "10000 dzd",
    src: p1,
    type: "type1",
  },
  { id: 2, type: "type1", title: "Product1", price: "10000 dzd", src: p2 },
  { id: 3, type: "type1", title: "Product1", price: "10000 dzd", src: p3 },
  { id: 4, type: "type2", name: "Product1", price: "10000 dzd", src: p4 },
  { id: 5, type: "type2", name: "Product1", price: "10000 dzd", src: p5 },
  { id: 6, type: "type2", name: "Product1", price: "10000 dzd", src: p6 },
  { id: 7, type: "type3", name: "Product1", price: "10000 dzd", src: p7 },
  { id: 8, type: "type3", name: "Product1", price: "10000 dzd", src: p8 },
  { id: 9, type: "type3", name: "Product1", price: "10000 dzd", src: p9 },
];

const myRouter = createBrowserRouter([
  {
    path: "",
    Component: HeaderWrapper,
    loader: (a) => a,
    children: [
      {
        path: "/home",
        Component: Landing,
        index: true,
      },
      {
        path: "/all_products",
        Component: AllProducts,
      },
      {
        path: "/product_details/:id",
        Component: ProductDetails,
        loader: ({ params }) => {
          const id = params.id;
          return products.find((singleProduct) => singleProduct.id == id);
        },
      },
      {
        path: "/about",
        Component: About,
      },
    ],
  },
]);

function App() {
  return (
    <Layout style={{ backgroundColor: "transparent", position: "relative" }}>
        <RouterProvider router={myRouter} />
    </Layout>
  );
}

export default App;
