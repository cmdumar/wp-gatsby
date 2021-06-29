import React from 'react';
import { Link, graphql } from 'gatsby';

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

    console.log('Node', nodes)

    return <>
        <h1>Bayans</h1>
        {nodes.map(node => (
            <Link key={node.id} to={node.uri} dangerouslySetInnerHTML={{ __html: node.name}} />
        ))}
    </>
}

export default BayanPage;
