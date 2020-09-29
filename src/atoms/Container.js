import styled from "styled-components";

import { SPACING, SIZES } from "../utilities/const";

const Container = styled.div`
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  width: ${SIZES.container};
  padding-top: ${SPACING.sm};
  padding-bottom: ${SPACING.sm};
`;

export default Container;
