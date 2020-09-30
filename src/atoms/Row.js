import styled from "styled-components";
import PropTypes from "prop-types";

import { SPACING, MEDIA_QUERIES } from "../utilities/const";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: ${({ justify }) => justify && "auto"};
  margin-bottom: ${({ justify }) => justify && "auto"};
  padding-top: ${({ justify }) => justify && SPACING.xl};
  padding-bottom: ${({ justify }) => justify && SPACING.xl};

  @media ${MEDIA_QUERIES.medium} {
    padding-top: ${({ justify }) => justify && SPACING.lg};
    padding-bottom: ${({ justify }) => justify && SPACING.lg};
  }
`;

Row.propTypes = {
  justify: PropTypes.bool
};

Row.defaultProps = {
  justify: false
};

export default Row;
