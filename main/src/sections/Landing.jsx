import { Flex } from "antd";
import Hero from "../components/Hero";
import Brand from "../components/Brand";
import Tendance from "../components/Tendance";
import Started from "../components/Started";
import Bfooter from "../components/Bfooter";

function Landing() {
  return (
    <Flex vertical justify="center" align="center" className="fullW">
      <Hero />
      <Brand />
      <Tendance />
      <Started />
      <Bfooter />
    </Flex>
  );
}

export default Landing;