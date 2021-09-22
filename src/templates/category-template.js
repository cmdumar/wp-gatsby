import React from 'react';
import {
    Image, Heading, Box, Text, SimpleGrid, AspectRatio,
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
                    shortClip {
                        embedid
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
    const categoryID = data.wpCategory.id;
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

            {categoryID != 'dGVybTo0Mg==' ?
                <SimpleGrid columns={[2, null, 3]} my="10" mx="4" spacing="10px">
                    {posts.map(post => (
                        <Box
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            p="4"
                            key={post.id}
                        >
                            <Heading size="h3" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <audio
                                style={{
                                    width: '100%'
                                }}
                                controls
                                preload="none"
                                src={post.bayanDetails.audio}>
                                    Your browser does not support the
                                    <code>audio</code> element.
                            </audio>
                            <Text fontSize="sm">{post.bayanDetails.date} | {post.bayanDetails.duration}</Text>
                        </Box>
                    ))}
                </SimpleGrid> :

                <SimpleGrid my="10" mx="4" columns={2} spacing="10px">
                    {posts.map(post => (
                        <Box
                            maxW="lg"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            p="4"
                            key={post.id}
                        >
                            <Heading size="h3" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <AspectRatio maxW="full" ratio={16 / 9}>
                                <iframe
                                    title={post.title}
                                    src={`https://www.youtube.com/embed/${post.shortClip.embedid}`}
                                    allowFullScreen
                                    allow="accelerometer;
                                        autoplay;
                                        clipboard-write;
                                        encrypted-media;
                                        gyroscope;
                                        picture-in-picture"
                                />
                            </AspectRatio>
                        </Box>
                    ))}
                </SimpleGrid>
            }
        </Layout>
    </>
}

export default CategoryTemplate;
