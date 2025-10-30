import { Flex } from "antd";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Tendance from "../components/Tendance";
import Started from "../components/Started";

function Landing() {
  return (
    <Flex vertical justify="center" align="center" className="fullW">
      <Hero />
      <Brand />
      <Tendance />
      <Started />
    </Flex>
  );
}

export default Landing;
