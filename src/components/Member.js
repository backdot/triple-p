import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 250px 1fr;
`

const Image = styled.img`
  
`

const Name = styled.h2``

const ShortName = styled.h2`
  margin-top: 1rem;
`

const Role = styled.div`
  margin-top: 1rem;
`

const Description = styled.p`
  margin-top: 1rem;
`

const Member = ({ name, shortName, role, description, image }) => {
  return (
    <Container>
      <Image src={image.file.url}/>
      <div>
        <Name>{name}</Name>
        <ShortName>{shortName}</ShortName>
        <Role>{role}</Role>
        <Description>{description.description}</Description>
      </div>
    </Container>
  )
}

export default Member
