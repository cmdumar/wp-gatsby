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
  </Box>
);

export default Menu;
