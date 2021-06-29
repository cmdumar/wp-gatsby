import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
    query CategoryByID($id: String!) {
        wpCategory(id: {eq: $id}) {
            name
            id
            posts {
                nodes {
                uri
                id
                content
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


    console.log('Bg', bg);

    return <>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <img src={bg.sourceUrl} alt={bg.altText} />
    </>
}

export default CategoryTemplate;
