import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from '../components/button'

class BlogIndex extends React.Component {

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
      <form name="contact" method="POST" data-netlify="true">
<p>
  <label>Your Name: <input type="text" name="name" /></label>
</p>
<p>
  <label>Your Email: <input type="email" name="email" /></label>
</p>
<p>
  <label>Your Role: <select name="role[]" multiple>
    <option value="leader">Leader</option>
    <option value="follower">Follower</option>
  </select></label>
</p>
<p>
  <label>Message: <textarea name="message"></textarea></label>
</p>
<p>
  <button type="submit">Send</button>
</p>
</form>

      </Layout>
    )
  }
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
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
