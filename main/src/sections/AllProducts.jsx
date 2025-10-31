import header from "../assets/images/pHeader.png";
import { Checkbox, Flex, InputNumber, Pagination, Typography } from "antd";
import "./all.css";
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import p7 from "../assets/images/p7.png";
import p8 from "../assets/images/p8.png";
import p9 from "../assets/images/p9.png";
import ProductCard from "../components/ProductCard";
import { useRef, useState } from "react";

const products = [
  [
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
  ],
  [
    {
      id: 9,
      title: "Product1",
      price: "10000 dzd",
      src: p9,
    },
    {
      id: 8,
      title: "Product1",
      price: "10000 dzd",
      src: p8,
    },
    { id: 7, title: "Product1", price: "10000 dzd", src: p7 },
    { id: 6, name: "Product1", price: "10000 dzd", src: p6 },
    { id: 5, name: "Product1", price: "10000 dzd", src: p5 },
    { id: 4, name: "Product1", price: "10000 dzd", src: p4 },
    { id: 3, name: "Product1", price: "10000 dzd", src: p3 },
    { id: 2, name: "Product1", price: "10000 dzd", src: p2 },
    { id: 1, name: "Product1", price: "10000 dzd", src: p1 },
  ],
  [
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
  ],
];

function AllProducts() {
  const prodsRef = useRef(products[0]);
  const [prods, setProds] = useState(products[0]);

  return (
    <div className="allCont" style={{ marginBottom: 40 }}>
      <img src={header} className="fullW" style={{ display: "block" }} />
      <Flex className="fullW allFlex" justify="center" align="start" gap={20}>
        <Flex
          vertical
          justify="start"
          align="start"
          className="filtersFlex"
          gap={50}
        >
          <Flex vertical justify="center" align="start" gap={20}>
            <Typography.Title className="title noMP">
              Product type
            </Typography.Title>
            <Checkbox.Group
              onChange={(newChecked) =>
                setProds(
                  prodsRef.current.filter((singleProd) =>
                    newChecked.includes(singleProd.type)
                  )
                )
              }
              style={{ flexDirection: "column" }}
              options={[
                { label: "type1", value: "type1", className: "label" },
                { label: "type2", value: "type2", className: "label" },
                { label: "type3", value: "type3", className: "label" },
              ]}
            />
          </Flex>
          <Flex vertical justify="center" align="start" gap={20}>
            <Typography.Title className="title noMP">
              Product price
            </Typography.Title>
            <Checkbox.Group
              onChange={(newChecked) => console.log(newChecked)}
              style={{ flexDirection: "column" }}
              options={[
                { label: "0-10000 dzd", value: [0, 10000], className: "label" },
                {
                  label: "10001-20000d zd",
                  value: [10000, 20000],
                  className: "label",
                },
                {
                  label: "20001-30000 dzd",
                  value: [20000, 50000],
                  className: "label",
                },
              ]}
            />
            {/* <Flex gap={2} style={{ marginTop: -20 }}>
              <span className="label">min:</span>
              <InputNumber className="fullW" suffix="dzd" />
            </Flex>
            <Flex gap={2} style={{ marginTop: -10 }}>
              <span className="label">max:</span>
              <InputNumber className="fullW" suffix="dzd" />
            </Flex> */}
          </Flex>
        </Flex>
        <Flex
          justify="start"
          align="center"
          gap={20}
          className="productsFlex"
          wrap
        >
          {prods.map((singleProduct) => (
            <ProductCard key={singleProduct.src} args={singleProduct} />
          ))}
          <div className="fullW">
            <Pagination
              align="end"
              total={27}
              defaultCurrent={1}
              pageSize={9}
              onChange={(newCurrent) => {
                window.scrollTo({
                  top: 200,
                  behavior: "smooth",
                });
                setProds(products[newCurrent - 1]);
              }}
            />
          </div>
        </Flex>
      </Flex>
    </div>
  );
}

export default AllProducts;
