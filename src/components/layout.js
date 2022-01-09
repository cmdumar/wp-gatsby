/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Box, Container } from "@chakra-ui/react"

const Layout = ({ children, bg }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container bg={bg} width="full" maxW="full" px="0" pb="4">
        {children}
      </Container>
      <Box
        as="footer"
        bg="gray.800"
        color="white"
        py="30"
        textAlign="center"
      >
        © {new Date().getFullYear()}
        {` `}
        Shariat.info
      </Box>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
};

Layout.defaultProps = {
  bg: "#ffffff",
};

export default Layout
