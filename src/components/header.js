import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Menu from "./menu";
import logo from '../images/logo.png';
import { Box, Image } from "@chakra-ui/react";

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
        display: 'inline-block',
      }}
    >
      <Image
        src={logo}
        alt="Shariat.info Logo"
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
