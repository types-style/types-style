import styled from "styled-components";
import PropTypes from "prop-types";

import { SPACING } from "../utilities/const";

const Spacing = styled.div`
  margin-top: ${({ top }) => SPACING[top]};
  margin-left: ${({ left }) => SPACING[left]};
  margin-right: ${({ right }) => SPACING[right]};
  margin-bottom: ${({ bottom }) => SPACING[bottom]};
`;

Spacing.propTypes = {
  top: PropTypes.oneOf(Object.keys(SPACING)),
  left: PropTypes.oneOf(Object.keys(SPACING)),
  right: PropTypes.oneOf(Object.keys(SPACING)),
  bottom: PropTypes.oneOf(Object.keys(SPACING))
};

export default Spacing;
