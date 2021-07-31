import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Menu from "./menu";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@chakra-ui/react";

const Header = () => (
  <Box
    as="header"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    px="20"
    py="4"
  >
    <Link
      to="/"
      style={{
        padding: 'auto 10px',
        display: 'inline-block',
      }}
    >
      <StaticImage
        src="../images/logo.png"
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Site Logo"
        style={{
          width: 'calc(25vw - 25px)',
        }}
      />
    </Link>
    <Menu />
  </Box>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
