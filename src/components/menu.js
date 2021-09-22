import React from 'react';
import { 
  Box,
  Link,
} from "@chakra-ui/react";

const Menu = () => (
  <Box
    as="navbar"
  >
    <Link
      href="/"
      px="4"
      fontSize="lg"
    >
      Home
    </Link>
    <Link
      href="/bayan"
      px="4"
      fontSize="lg"
    >
      Bayans
    </Link>
    <Link
      href="#"
      px="4"
      fontSize="lg"
    >
      Posters
    </Link>
    <Link
      href="/category/short-clips/"
      px="4"
      fontSize="lg"
    >
      Short clips
    </Link>
  </Box>
);

export default Menu;
