import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import MemberList from '../components/MemberList'
import Member from '../components/Member'

const Band = ({ data }) => {
  const members = data.allContentfulBandMember.edges

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | Band`}</title>
      </Helmet>
      <SEO />
      <Container>
        <PageTitle>Band</PageTitle>
        <MemberList>
          {members.map(({ node: member }) => (
            <li key={member.id}>
              <Member {...member} />
            </li>
          ))}
        </MemberList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBandMember(filter: {node_locale: {eq: "de"}}, sort: {fields: name, order: ASC}) {
      edges {
        node {
          id
          name
          shortName
          description {
            description
          }
          role
          image {
            file {
              url
              fileName
              contentType
            }
          }
          sound {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`

export default Band
