import React from 'react';
import { 
  Box,
  Link,
} from "@chakra-ui/react";

const Menu = () => (
  <Box
    as="navbar"
  >
    <Link href="/" px="4">
      Home
    </Link>
    <Link href="/bayan" px="4">
      Bayans
    </Link>
    <Link href="#" px="4">
      Posters
    </Link>
  </Box>
);

export default Menu;
