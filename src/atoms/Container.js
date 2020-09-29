import styled from "styled-components";

import { SPACING, SIZES } from "../utilities/const";

const Container = styled.div`
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  width: ${SIZES.container};
  margin-top: ${SPACING.sm};
  margin-bottom: ${SPACING.sm};
`;

export default Container;
