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

    return <Layout>
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
        >Bayan</Heading>
      </Box>
      <Center bg="#c5d289" width="100%" p="40">
        <VStack
          spacing={8}
          align="center"
        >
          {nodes.map(node => ( 
            <Link key={node.id} to={node.uri}>
              <Button colorScheme="gray" size="md">
                {node.name}
              </Button>
            </Link>
          ))}
        </VStack>
      </Center>
    </Layout>
}

export default BayanPage;
