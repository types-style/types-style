import PropTypes from "prop-types";
import styled from "styled-components";

import { COLORS, FONT_SIZE, MEDIA_QUERIES } from "../utilities/const";

const Typography = styled.span`
  color: ${COLORS.darkGray};
  font-size: ${({ variant }) => FONT_SIZE[variant]};

  @media ${MEDIA_QUERIES.medium} {
    font-size: ${({ variant }) => variant === "title" && FONT_SIZE.subtitle};
  }
`;

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.keys(FONT_SIZE)).isRequired
};

export default Typography;
