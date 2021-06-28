import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from "gatsby"

export const query = graphql`
    query {
        wpPage {
            id
            title
            content
            featuredImage {
                node {
                  sourceUrl
                }
            }
        }
    }
`;

const HomePage = ({ data }) => {
    const content = data.wpPage.content;
    const bg = data.wpPage.featuredImage.node.sourceUrl;
    console.log('data', data);
    console.log('img', bg);

    return (
        <Layout>
            <SEO title="Home" />
            <img src={bg} alt="Background" />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export default HomePage;
