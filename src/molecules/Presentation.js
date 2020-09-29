import React from "react";
import PropTypes from "prop-types";

import Image from "../atoms/Image";
import Column from "../atoms/Column";

import pen from "../static/pen@2x.png";
import call from "../static/call@2x.png";
import hash from "../static/hash@2x.png";
import love from "../static/love@2x.png";
import quotes from "../static/quotes@2x.png";
import controls from "../static/controls@2x.png";
import post from "../static/post@2x.png";

/**
 * Constants
 */
const IMAGES = [
  { src: controls, absolute: true },
  { src: post, absolute: false },
  { src: quotes, absolute: true },
  { src: love, absolute: true },
  { src: pen, absolute: true },
  { src: hash, absolute: true },
  { src: call, absolute: true }
];

const MOVE_FACTORS = [
  { x: 10, y: 10 },
  { x: 20, y: 20 },
  { x: 9, y: 11 },
  { x: 13, y: 12 },
  { x: 19, y: 12 },
  { x: 10, y: 7 },
  { x: 5, y: 10 }
];

/**
 * Helpers
 */
function position(xy, index) {
  return xy.interpolate((x, y) => `translate3d(${x / MOVE_FACTORS[index].x}px, ${y / MOVE_FACTORS[index].y}px, 0)`);
}

function Presentation({ xy }) {
  return (
    <Column>
      {IMAGES.map((image, index) => (
        <Image key={image.src} {...image} style={{ transform: position(xy, index) }} />
      ))}
    </Column>
  );
}

Presentation.propTypes = {
  xy: PropTypes.object.isRequired
};

export default Presentation;
