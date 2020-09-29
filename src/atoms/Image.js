import styled from "styled-components";
import { animated } from "react-spring";

const Image = styled(animated.img)`
  top: 0;
  left: 0;
  position: ${({ absolute }) => (absolute ? "absolute" : "relative")};
`;

export default Image;
