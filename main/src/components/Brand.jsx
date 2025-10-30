import { Flex, Typography } from "antd";
import "./brand.css";
import delivery from "../assets/icons/Delivery.svg";
import yes from "../assets/icons/yes.svg";
import purchase from "../assets/icons/Purchase.svg";
import sprout from "../assets/icons/Sprout.svg";

function Brand() {
  return (
    <Flex vertical className="fullW brandFlex" justify="center" align="center">
      <Typography.Title className="brandTitle">
        What makes our brand different
      </Typography.Title>
      <Flex
        className="fullW brandCards"
        justify="center"
        align="center"
        gap={15}
      >
        <Flex vertical justify="center" align="start" className="brandCard">
          <img src={delivery} className="delivery" />
          <Typography.Title className="title darkPrimary">
            Next day as standard
          </Typography.Title>
          <Typography.Text className="text darkPrimary">
            Order before 3pm and get your order the next day as standard
          </Typography.Text>
        </Flex>
        <Flex vertical justify="center" align="start" className="brandCard">
          <img src={yes} className="delivery" />
          <Typography.Title className="title darkPrimary">
            Next day as standard
          </Typography.Title>
          <Typography.Text className="text darkPrimary">
            Order before 3pm and get your order the next day as standard
          </Typography.Text>
        </Flex>
        <Flex vertical justify="center" align="start" className="brandCard">
          <img src={purchase} className="delivery" />
          <Typography.Title className="title darkPrimary">
            Next day as standard
          </Typography.Title>
          <Typography.Text className="text darkPrimary">
            Order before 3pm and get your order the next day as standard
          </Typography.Text>
        </Flex>
        <Flex vertical justify="center" align="start" className="brandCard">
          <img src={sprout} className="delivery" />
          <Typography.Title className="title darkPrimary">
            Next day as standard
          </Typography.Title>
          <Typography.Text className="text darkPrimary">
            Order before 3pm and get your order the next day as standard
          </Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Brand;
