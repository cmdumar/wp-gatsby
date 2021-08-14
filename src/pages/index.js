import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { Image } from '@chakra-ui/image';
import { graphql } from 'gatsby';
import { Box } from '@chakra-ui/react';
import '../styles/home.css';

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
    const bg = data?.wpPage?.featuredImage?.node.sourceUrl;

    return (
        <Layout>
            <Seo title="Home" />
            <Image src={bg} objectFit="cover" width="full" height="60vh" alt="Background" />
            <Box
                bg="twitter.400"
                textAlign="center"
                color="white"
                pt="20"
                pb="40"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </Layout>
    );
}

export default HomePage;
