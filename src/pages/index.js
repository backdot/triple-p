import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Home from '../components/Home'

const HomePage = () => {  
  return (
    <Layout wrapperClass="page-home">
      <SEO />
      <Container>
        <Home />
      </Container>
    </Layout>
  )
}

export default HomePage
