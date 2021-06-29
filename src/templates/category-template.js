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
        }
    }
`

const CategoryTemplate = ({ data }) => {
    const title = data.wpCategory.name;

    return <>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
    </>
}

export default CategoryTemplate;
