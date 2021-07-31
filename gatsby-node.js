exports.createPages = async gatsbyUtilities => {
    const categories = await getCategories(gatsbyUtilities);

    if(!categories.length) {
        return;
    }

    await createIndiviualCategoryPages({ categories, gatsbyUtilities })
}

const createIndiviualCategoryPages = async ({ categories, gatsbyUtilities }) => 
    Promise.all(
        categories.map(category => 
            gatsbyUtilities.actions.createPage({
                path: category.uri,
                component: require.resolve('./src/templates/category-template.js'),
                context: {
                    id: category.id
                },
            })
        )
    )


const getCategories = async ({ graphql, reporter }) => {
    const graphqlResult = await graphql(`
        query WpCategories {
            allWpCategory {
                nodes {
                    id
                    uri
                }
            }
        }
    `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
          `There was an error loading your blog posts`,
          graphqlResult.errors
        )
        return;
    }

    return graphqlResult.data.allWpCategory.nodes;
}