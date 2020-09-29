import styled from "styled-components";

import { COLORS, SPACING, SIZES, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE, BORDER_RADIUS } from "../utilities/const";

const Input = styled.input`
  width: ${SIZES.input};
  color: ${COLORS.darkGray};
  background: ${COLORS.white};
  font-size: ${FONT_SIZE.label};
  font-family: ${FONT_FAMILY.base};
  font-weight: ${FONT_WEIGHT.medium};
  padding: ${SPACING.xs} ${SPACING.sm};
  border-radius: ${BORDER_RADIUS.rounded};
  ::placeholder {
    color: ${COLORS.lightGray};
  }
`;

export default Input;
