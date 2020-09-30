import PropTypes from "prop-types";
import styled from "styled-components";

import { COLORS, FONT_SIZE } from "../utilities/const";

const Typography = styled.span`
  color: ${COLORS.darkGray};
  font-size: ${({ variant }) => FONT_SIZE[variant]};
`;

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(FONT_SIZE)).isRequired
};

export default Typography;
