import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Band = ({ data }) => {
  const members = data.allContentfulBandMember.edges

  console.log(members);

  return (
    <Layout>
      <SEO />
      <Container>
        <CardList>
          {members.map(({ node: member }) => (
            <div key={member.id}>
              <div>{member.name}</div>
              <div>{member.shortName}</div>
              <div>{member.role}</div>
              <div>{member.description.description}</div>
              <img src={member.image.file.url}/>
            </div>
            // <Card key={member.id} {...member} />
          ))}
        </CardList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBandMember {
      edges {
        node {
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
