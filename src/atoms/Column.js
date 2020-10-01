import styled from "styled-components";
import PropTypes from "prop-types";

import { SPACING, MEDIA_QUERIES } from "../utilities/const";

const Column = styled.div`
  width: 50%;
  position: relative;
  padding-left: ${SPACING.lg};
  padding-right: ${SPACING.lg};

  @media ${MEDIA_QUERIES.large} {
    padding-left: ${SPACING.md};
    padding-right: ${SPACING.md};
    width: ${({ last }) => last ? "35%" : "65%"};
  }

  @media ${MEDIA_QUERIES.small} {
    width: 100%;
    padding-left: ${SPACING.sm};
    padding-right: ${SPACING.sm};
    margin-bottom: ${({ last }) => last && SPACING.lg};
  }
`;

Column.propTypes = {
  last: PropTypes.bool
};

Column.defaultProps = {
  last: false
};

export default Column;
