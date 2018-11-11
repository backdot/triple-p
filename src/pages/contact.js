import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const postNode = {
    title: `Kontakt - ${config.siteTitle}`,
  }

  return (
    <Layout>
      <Helmet>
        <title>{`Kontakt - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle>Kontakt</PageTitle>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
