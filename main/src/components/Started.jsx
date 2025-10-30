import "./started.css";
import { Flex, Typography } from "antd";

function Started() {
  return (
    <Flex
      justify="center"
      align="center"
      gap={16}
      className="startedFlex fullW"
    >
      <Flex
        justify="space-between"
        align="start"
        vertical
        className="startedCard"
      >
        <Flex vertical justify="center" align="center" gap={12}>
          <Typography.Title className="title">
            It started with a small idea
          </Typography.Title>
          <Typography.Text className="text">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </Typography.Text>
        </Flex>
        <Typography.Text className="startedView">
          View collection
        </Typography.Text>
      </Flex>
    </Flex>
  );
}

export default Started;
