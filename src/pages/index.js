import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <div className="container">
        <div className="row">
          {posts.map(post => {
            const title = post.frontmatter.title || post.frontmatter.slug
            const date = post.frontmatter.date.toUpperCase()
            const image = getImage(post.frontmatter.image)
            return (
              <div className="col-lg-4 mb-4" key={post.fields.slug}>
                <div className="card shadow" style={{ borderRadius: "7px" }}>
                  <Link to={post.fields.slug} itemProp="url">
                    <GatsbyImage
                      image={image}
                      className="card-img-top"
                      style={{ borderRadius: "7px 7px 0 0" }}
                    />
                  </Link>
                  <div className="card-body px-4">
                    <small className="text-muted">{date}</small>
                    <h5 className="mt-2">{title}</h5>
                    <p className="card-text">
                      Aenean vulputate arcu vitae ligula semper auctor.
                      Curabitur sodales enim feugiat nibh tincidunt tincidunt.
                      Sed risus tellus, vulputate quis.
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          date(formatString: "MMMM DD, YYYY")
          image {
            childImageSharp {
              gatsbyImageData(height: 344, width: 452)
            }
          }
        }
      }
    }
  }
`
