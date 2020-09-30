import React from "react";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Images from "../atoms/Images";
import Column from "../atoms/Column";

import pen from "../static/pen@2x.png";
import call from "../static/call@2x.png";
import hash from "../static/hash@2x.png";
import love from "../static/love@2x.png";
import quotes from "../static/quotes@2x.png";
import controls from "../static/controls@2x.png";
import post from "../static/post@2x.png";

const IMAGES = [
  { src: controls, absolute: true },
  { src: post, absolute: false },
  { src: quotes, absolute: true },
  { src: love, absolute: true },
  { src: pen, absolute: true },
  { src: hash, absolute: true },
  { src: call, absolute: true }
];

const MOVE_FRICTION = [
  { x: 20, y: 17 },
  { x: 35, y: 30 },
  { x: 25, y: 21 },
  { x: 27, y: 40 },
  { x: 30, y: 24 },
  { x: 26, y: 24 },
  { x: 27, y: 28 }
];

function position(xy, index) {
  return xy.interpolate((x, y) => `translate3d(${x / MOVE_FRICTION[index].x}px, ${y / MOVE_FRICTION[index].y}px, 0)`);
}

function Presentation({ xy }) {
  return (
    <Column last>
      <Images>
        {IMAGES.map((image, index) => (
          <Image key={image.src} {...image} style={{ transform: position(xy, index) }} />
        ))}
      </Images>
    </Column>
  );
}

Presentation.propTypes = {
  xy: PropTypes.object.isRequired
};

export default Presentation;
