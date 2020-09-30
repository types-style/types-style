import styled from "styled-components";

import { SPACING, SIZES, MEDIA_QUERIES } from "../utilities/const";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  width: ${SIZES.container};
  padding-top: ${SPACING.sm};
  padding-bottom: ${SPACING.sm};

  @media ${MEDIA_QUERIES.large} {
    width: 100%;
    padding-left: ${SPACING.sm};
    padding-right: ${SPACING.sm};
  }

  @media ${MEDIA_QUERIES.small} {
    padding-bottom: ${SPACING.sm};
  }
`;

export default Container;
