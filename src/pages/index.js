import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
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

    return (
        <Layout>
            <Seo title="Home" />
            <img src={bg} style={{ width: '100%' }} alt="Background" />
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export default HomePage;
