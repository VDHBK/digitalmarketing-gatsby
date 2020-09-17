import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MemberList from "../components/memberlist"

function AboutUsPage(props) {
  return (
    <Layout>
      <Link to="/">Home</Link>
      <SEO title="World" />
      {props.data.allAboutUsJson.nodes[0].data.map((item, index) => {
        return <MemberList key={index} data={item} />
      })}
    </Layout>
  )
}

export default AboutUsPage

export const query = graphql`
  {
    allAboutUsJson {
      nodes {
        data {
          id
          title
          description
          imgSrc {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
