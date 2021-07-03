import React from 'react';
import { Link, graphql } from 'gatsby';
import { VStack, Button, Center } from "@chakra-ui/react"
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
      <h1>Bayans</h1>
      <Center bg="#c5d289" width="100%">
        <VStack
          spacing={4}
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
