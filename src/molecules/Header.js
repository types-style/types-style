import React from "react";

import Row from "../atoms/Row";
import Spacing from "../atoms/Spacing";
import Typography from "../atoms/Typography";

import { COLORS } from "../utilities/const";

function Header() {
  return (
    <Spacing bottom="xl">
      <Row>
        <svg width="36" height="36">
          <path
            fill={COLORS.orange}
            d="M28 0a8 8 0 018 8v14.025c-.034 1.06-2.175 2.12-6.425 3.181a6 6 0 00-4.369 4.37C24.137 33.857 23.07 36 22 36h.026A4 4 0 0122 36H8a8 8 0 01-8-8V8a8 8 0 018-8h20zm7 24.427v.4c-.276.391-.61.782-1 1.173l-8 8c-.39.39-.782.724-1.172 1h-.4c.622-1.19 1.182-2.914 1.748-5.183a5 5 0 013.641-3.64c2.269-.567 3.993-1.127 5.183-1.75z"
          />
          <path
            fill={COLORS.white}
            d="M20 24h3v2H13v-2h3V12h-3.02l-.116.006c-.947.084-1.852 1.027-1.864 1.975V16H9v-6h18v6h-2v-2c0-1-1-2-2-2h.019H20v12z"
          />
        </svg>
        <Spacing left="xs">
          <Typography variant="subtitle">
            Types.<em>style</em>
          </Typography>
        </Spacing>
      </Row>
    </Spacing>
  );
}

export default Header;
