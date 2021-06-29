/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        query WpCategories {
            allWpCategory {
                nodes {
                    id
                    uri
                }
            }
        }
    `);

    console.log('result', result);

    const categories = result.data.allWpCategory.nodes;

    categories.forEach(node => {
        actions.createPage({
            path: node.uri,
            component: require.resolve('./src/templates/category-template.js'),
            context: {
                id: node.id
            },
        })
    });
}