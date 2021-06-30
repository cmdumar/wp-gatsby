import React from 'react';
import { graphql } from 'gatsby';

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
            header {
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
    const bg = data.wpCategory.header.featuredImage;
    const posts = data.wpCategory.posts.nodes;

    return <>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <img src={bg.sourceUrl} alt={bg.altText} />
        <div>
            {posts.map(post => (
                <div key={post.id} style={{ border: "1px solid black", padding: "30px", margin: "10px" }}>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    <audio
                        controls
                        preload="none"
                        src={post.bayanDetails.audio.mediaItemUrl}>
                            Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                    <p>{post.bayanDetails.date} | {post.bayanDetails.duration}</p>
                </div>
            ))}
        </div>
    </>
}

export default CategoryTemplate;
