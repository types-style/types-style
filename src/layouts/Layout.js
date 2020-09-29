import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Reset from "../atoms/Reset";
import Container from "../atoms/Container";

function Layout({ children, onMouseMove }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" />
        <title>types.style — Dedicated, mobile-first editor for micro-blogging</title>
      </Helmet>
      <Reset />
      <Container onMouseMove={onMouseMove}>{children}</Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onMouseMove: PropTypes.func.isRequired
};

export default Layout;
