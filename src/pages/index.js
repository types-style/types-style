import React from "react";
import { useSpring } from "react-spring";

import { SPRING_CONFIG } from "../utilities/const";

import Row from "../atoms/Row";
import Layout from "../layouts/Layout";

import Header from "../molecules/Header";
import Subscribe from "../molecules/Subscribe";
import Presentation from "../molecules/Presentation";

export function calc(x, y) {
  return [x - window.innerWidth / SPRING_CONFIG.factor, y - window.innerHeight / SPRING_CONFIG.factor];
}

function Home() {
  const [spring, set] = useSpring(() => SPRING_CONFIG);

  const onMouseMove = ({ clientX, clientY }) => {
    set({
      xy: calc(clientX, clientY)
    });
  };

  return (
    <Layout onMouseMove={onMouseMove}>
      <Header />
      <Row>
        <Subscribe />
        <Presentation xy={spring.xy} />
      </Row>
    </Layout>
  );
}

export default Home;
