import "./started.css";
import { Flex, Typography } from "antd";
import started from "../assets/images/started.png";
import { useNavigate } from "react-router-dom";

function Started() {
  const redirect = useNavigate();
  return (
    <Flex justify="center" gap={16} className="startedFlex fullW">
      <Flex
        justify="space-between"
        align="start"
        vertical
        className="startedCard"
      >
        <Flex vertical justify="center" align="start" gap={12}>
          <Typography.Title className="title">
            It started with a small idea
          </Typography.Title>
          <Typography.Text className="text">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </Typography.Text>
        </Flex>
        <Typography.Text
          className="startedView"
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
      </Flex>
      <img src={started} className="startedImg" />
    </Flex>
  );
}

export default Started;
