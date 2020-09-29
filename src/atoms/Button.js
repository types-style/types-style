import styled from "styled-components";

import { COLORS, SPACING, FONT_FAMILY, FONT_WEIGHT, FONT_SIZE, BORDER_RADIUS } from "../utilities/const";

const Button = styled.button`
  cursor: pointer;
  color: ${COLORS.white};
  margin-left: ${SPACING.sm};
  background: ${COLORS.orange};
  font-size: ${FONT_SIZE.label};
  font-family: ${FONT_FAMILY.base};
  font-weight: ${FONT_WEIGHT.medium};
  border: 1px solid ${COLORS.darkOrange};
  border-radius: ${BORDER_RADIUS.rounded};
  padding: ${SPACING.xs} ${SPACING.sm};
`;

export default Button;
