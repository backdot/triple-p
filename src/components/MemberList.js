import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0 auto;
  max-width: 800px;

  &::after {
    content: '';
    flex: 0 0 32%;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 10rem;
    }

    &:nth-child(2n) > div {
      direction: rtl;
    }
  }
`

const MemberList = props => {
  return <List>{props.children}</List>
}

export default MemberList
