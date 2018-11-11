import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Container>
        <div style={{marginTop: '5rem', fontSize: '30px', textAlign: 'center'}}>
          <div style={{fontSize: '40px'}}>
            🥁🥁🥁
            <span style={{fontStyle: 'italic'}}>
              &nbsp;...Drumroll, please!&nbsp;
            </span>
            🥁🥁🥁
          </div>
          <br /><br />
          Bald gibt's hier alle Infos zu eurer Lieblingsband!
          <br /><br />
          🎸 Patrick, Peter & Phil
        </div>
      </Container>
    </Layout>
  )
}

export default Index
