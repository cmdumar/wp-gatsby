import React from 'react';
import { Link, graphql } from 'gatsby';
import {
  VStack, Button, Center, Box, Image, Heading
} from "@chakra-ui/react";
import Layout from '../components/layout';

export const categories = graphql`
  query {
    allWpCategory {
      nodes {
        id
        uri
        name
      }
    }
  }
`

const BayanPage = ({ data }) => {
    const nodes = data.allWpCategory.nodes;

    return <Layout bg="#c5d289">
      <Box
        width="full"
        position="relative"
      >
        <Image
          src="https://media.giphy.com/media/AlqUdr1CSODLO/giphy.gif"
          objectFit="cover"
          width="full"
          height="60vh"
          alt="Background"
        />
        <Heading
          position="absolute"
          top="70%"
          left="0"
          right="0"
          textAlign="center"
          color="green.900"
          textShadow="1px 1px 0 #57ff64"
          size="3xl"
        >
          Bayan
        </Heading>
      </Box>
      <Center
        width="100%"
        py="20"
      >
        <VStack
          spacing={8}
          align="center"
        >
          {nodes.map(node => ( 
            <Link key={node.id} to={node.uri}>
              <Button
                bg="#748c4e69"
                color="white"
                textShadow="1px 1px 0 #230a0a"
                colorScheme="green"
                fontWeight="bold"
                px="20"
                maxWidth="222px"
                width="full"
                boxShadow="0 4px 8px 2px rgb(0 0 0 / 35%)"
                size="md"
                textTransform="uppercase"
              >
                {node.name}
              </Button>
            </Link>
          ))}
        </VStack>
      </Center>
    </Layout>
};

export default BayanPage;
