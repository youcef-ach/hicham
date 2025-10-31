import "./bfooter.css";
import bfooter from "../assets/images/bfooter.png";
import { Flex, Typography } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";

function Bfooter() {
  return (
    <div className="bfooterCont">
      <img src={bfooter} className="fullHW bfooterImg" />
      <Flex vertical justify="center" align="center" gap={12} className="aFlex">
        <Typography.Title className="title">
          let's bring high-quality decoration and timeless style to your space.
        </Typography.Title>
        <Flex justify="space-between" align="center" gap={36}>
          <Flex gap={8} align="center">
            <CheckCircleFilled style={{ color: "white" }} />
            <Typography.Text style={{ color: "white" }}>
              exclusive offers
            </Typography.Text>
          </Flex>
          <Flex gap={8} align="center">
            <CheckCircleFilled style={{ color: "white" }} />
            <Typography.Text style={{ color: "white" }}>
              premium quality
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default Bfooter;