import React from 'react';
import {
    Image, Heading, Box
  } from "@chakra-ui/react";
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const pageQuery = graphql`
    query CategoryByID($id: String!) {
        wpCategory(id: {eq: $id}) {
            name
            id
            posts {
                nodes {
                    id
                    title
                    uri
                    bayanDetails {
                        date
                        duration
                        audio
                    }
                }
            }
            BayansPage {
                backgroundColor
                buttonColor
                cardBg
                headingColor
                featuredImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

const CategoryTemplate = ({ data }) => {
    const title = data.wpCategory.name;
    const bg = data.wpCategory.BayansPage.featuredImage;
    const posts = data.wpCategory.posts.nodes;

    return <>
        <Layout>
            <Box
                width="full"
                position="relative"  
            >
                <Image
                    src={bg.sourceUrl}
                    alt={bg.altText}
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
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </Box>
            <div>
                {posts.map(post => (
                    <div key={post.id} style={{ border: "1px solid black", padding: "30px", margin: "10px" }}>
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                        <audio
                            controls
                            preload="none"
                            src={post.bayanDetails.audio}>
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                        <p>{post.bayanDetails.date} | {post.bayanDetails.duration}</p>
                    </div>
                ))}
            </div>
        </Layout>
    </>
}

export default CategoryTemplate;
