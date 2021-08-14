import React from 'react';
import {
    Image, Heading, Text, Box, Button, Container, SimpleGrid
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
                        audio {
                        mediaItemUrl
                        }
                    }
                }
            }
            BayansPage {
                backgroundColor
                buttonColor
                headingColor
                cardBg
                featuredImage {
                  sourceUrl
                  altText
                }
            }
        }
    }
`;

const CategoryTemplate = ({ data }) => {
    console.log('data', data);
    const title = data.wpCategory.name;
    const headingColor = data.wpCategory.BayansPage.headingColor;
    const buttonColor = data.wpCategory.BayansPage.buttonColor;
    const backgroundColor = data.wpCategory.BayansPage.backgroundColor;
    const cardBg = data.wpCategory.BayansPage.cardBg;
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
                    color={headingColor}
                    textShadow={`1px 1px 0 ${cardBg}`}
                    size="3xl"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </Box>
            <Container bg={backgroundColor} maxWidth="full">
                <SimpleGrid
                    minChildWidth="350px"
                    spacing="16px"
                    padding="4"
                    as="section"
                >
                    {posts.map(post => (
                        <Box
                            key={post.id}
                            bg={cardBg}
                            borderRadius="md"
                            padding="14px"
                        >
                            <Heading
                                fontSize="md"
                                mb="4"
                                as="h3"
                                dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                            <audio
                                style={{
                                    marginBottom: '1em',
                                    width: '100%',
                                }}
                                controls
                                preload="none"
                                src={post.bayanDetails.audio.mediaItemUrl}>
                                    Your browser does not support the
                                    <code>audio</code> element.
                            </audio>
                            <Text fontSize="sm" mb="4">
                                {post.bayanDetails.date} | {post.bayanDetails.duration}
                            </Text>
                            <Button bg={buttonColor} color="white">Download</Button>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Layout>
    </>
}

export default CategoryTemplate;
