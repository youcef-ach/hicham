import { Typography } from "antd";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";
import { Flex } from "antd";
import Brand from "../components/Brand";
import Bfooter from "../components/Bfooter";

function About() {
  return (
    <>
      <Typography.Title className="aboutTitle">
        A brand built on the love of craftmanship, quality and outstanding
        customer service
      </Typography.Title>
      <Flex
        justify="center"
        className="startedFlex fullW"
        style={{ padding: 0 }}
      >
        <img src={b4} className="startedImg" />
        <Flex
          justify="space-between"
          align="start"
          vertical
          className="startedCard"
          style={{ backgroundColor: "white", color: "#2a254b" }}
        >
          <Flex vertical justify="center" gap={12}>
            <Typography.Title className="title" style={{ color: "#2a254b" }}>
              From a studio in SIDI_BELABBES to a global brand with over 400
              outlets
            </Typography.Title>
            <Typography.Text className="text" style={{ color: "#2a254b" }}>
              When we started HDECO, the idea was simple. Make high quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </Typography.Text>
          </Flex>
          <Typography.Text
            className="startedView"
            style={{ backgroundColor: "#2a254b" }}
          >
            View collection
          </Typography.Text>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        className="startedFlex fullW"
        style={{ padding: 0 }}
      >
        <Flex
          justify="space-between"
          align="start"
          vertical
          className="startedCard"
          style={{ backgroundColor: "white", color: "#2a254b" }}
        >
          <Flex vertical justify="center" gap={12}>
            <Typography.Title className="title" style={{ color: "#2a254b" }}>
              Our service isn't just personal, it's actually hyper personally
              exquisite
            </Typography.Title>
            <Typography.Text className="text" style={{ color: "#2a254b" }}>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market. Handmade,
              and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for
              the London interior design community.
            </Typography.Text>
          </Flex>
          <Typography.Text
            className="startedView"
            style={{ backgroundColor: "#2a254b" }}
          >
            View collection
          </Typography.Text>
        </Flex>
        <img src={b3} className="startedImg" />
      </Flex>
      <Brand />
      <Bfooter />
    </>
  );
}

export default About;
