import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const Background = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  overflow: hidden;
  z-index: -1;
`

const BackgroundImage = styled.div`
  background-image: url('./images/background-6.jpg');
  background-position: 50% 50%;
  background-size: cover;
  filter: brightness(50%);
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: none;
  transition: none 0s ease 0s;
  z-index: 1;
`

const TitleWrap = styled.div`
  color: #e3dfdf;
  font-size: 51px;
  position: absolute;
  top: 400px;
  top: 50vh;
  left: 0;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  padding: 0 2rem;
  opacity: 1;
  text-transform: uppercase;
  transition: opacity 1s;
  z-index: 2;
  font-family: ${props => props.theme.fonts.title};
  letter-spacing: .5em;
`

const Home = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  const animProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { mass: 1, tension: 480, friction: 420 },
    delay: 200,
  })

  return (
    <>
      <Background style={animProps}>
        <BackgroundImage/>
      </Background>
      <TitleWrap>
        <h1>Triple P</h1>
      </TitleWrap>
    </>
  )
}

export default Home