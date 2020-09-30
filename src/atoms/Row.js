import styled from "styled-components";
import PropTypes from "prop-types";

import { SPACING } from "../utilities/const";

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ justify }) => justify && "auto"};
  margin-bottom: ${({ justify }) => justify && "auto"};
  padding-top: ${({ justify }) => justify && SPACING.xl};
  padding-bottom: ${({ justify }) => justify && SPACING.xl};
`;

Row.propTypes = {
  justify: PropTypes.bool
};

Row.defaultProps = {
  justify: false
};

export default Row;
