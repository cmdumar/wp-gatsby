import React from 'react';
import {
    Image, Heading, Box, Text, SimpleGrid, AspectRatio, Button,
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
                textShadow
                featuredImage {
                    sourceUrl
                    altText
                }
            }
        }
    }
`;

const CategoryTemplate = ({ data }) => {
    const { wpCategory } = data;
    const title = wpCategory.name;
    const categoryID = wpCategory.id;
    const {
        featuredImage,
        buttonColor,
        cardBg,
        headingColor,
        backgroundColor,
        textShadow,
    } = wpCategory.BayansPage;
    const posts = wpCategory.posts.nodes;

    return <>
        <Layout bg={backgroundColor}>
            <Box
                width="full"
                position="relative"  
            >
                <Image
                    src={featuredImage.sourceUrl}
                    alt={featuredImage.altText}
                    objectFit="cover"
                    width="full"
                    height="60vh"
                />
                <Heading
                    position="absolute"
                    top="70%"
                    left="0"
                    right="0"
                    textAlign="center"
                    color={headingColor}
                    textShadow={`1px 1px 0 ${textShadow}`}
                    size="3xl"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </Box>

            {categoryID !== 'dGVybTo0Mg==' ?
                <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} my="10" mx="4" spacing="10px">
                    {posts.map(post => (
                        <Box
                            maxW="sm"
                            borderRadius="lg"
                            overflow="hidden"
                            p="4"
                            bg={cardBg}
                            key={post.id}
                        >
                            <Heading size="h3" mb="3" dangerouslySetInnerHTML={{ __html: post.title }} />
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
                            <Text fontSize="sm" my="3">{post.bayanDetails.date} | {post.bayanDetails.duration}</Text>
                            <Button
                                as="a"
                                href={post.bayanDetails.audio}
                                bg={buttonColor}
                                borderRadius="md"
                                px="6"
                            >
                                Download
                            </Button>
                        </Box>
                    ))}
                </SimpleGrid> :

                <SimpleGrid my="10" mx="4" columns={{ sm: 2, md: 3, lg: 4 }} spacing="10px">
                    {posts.map(post => (
                        <Box
                            maxW="lg"
                            overflow="hidden"
                            p="4"
                            key={post.id}
                        >
                            <Heading size="h3" mb="3" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <AspectRatio maxW="full" ratio={16 / 9}>
                                <iframe
                                    title={post.title}
                                    src={`https://www.youtube.com/embed/${post.shortClip.embedid}`}
                                    allowFullScreen
                                    allow="
                                        accelerometer;
                                        autoplay;
                                        clipboard-write;
                                        encrypted-media;
                                        gyroscope;
                                        picture-in-picture
                                    "
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
