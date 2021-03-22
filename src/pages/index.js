import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const currentPage = 1,
    numPages = 3
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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

      <div className="container mt-5">
        <div className="row">
          {posts.map(post => {
            const title = post.frontmatter.title || post.frontmatter.slug
            const date = post.frontmatter.date.toUpperCase()
            const image = getImage(post.frontmatter.image)
            return (
              <div className="col-lg-4 mb-4" key={post.fields.slug}>
                <div className="card h-100 shadow">
                  <Link to={post.fields.slug} itemProp="url">
                    <GatsbyImage
                      image={image}
                      className="card-img-top img-raduis"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body px-4">
                    <small className="text-muted">{date}</small>
                    <h5 className="mt-2">{title}</h5>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
          </li>
          <li>
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/${i === 0 ? "" : i + 1}`}
              >
                {i + 1}
              </Link>
            ))}
          </li>
          <li className="page-item" onclick="activateLasers()">
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query($skip: Int, $limit: Int = 6) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          date(formatString: "MMM DD, YYYY")
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
