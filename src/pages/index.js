import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import get from 'lodash/get'
import SEO from '../components/SEO'
import Layout from '../components/Layout'

const StoreIndex = ({location}) => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `)

  const siteTitle = get(data, 'site.siteMetadata.title')
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <h2>Our beautiful new site is coming soon!</h2>
    </Layout>
  )
}

export default StoreIndex
