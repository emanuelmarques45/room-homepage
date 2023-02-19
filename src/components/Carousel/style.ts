import styled, { css } from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import { devices } from '../../assets/GlobalStyle'
import { motion } from 'framer-motion'

const Container = styled.div`
  @media (${devices.laptop}) {
    display: flex;
  }
`

const CarouselS = styled(Carousel)`
  --arrow-width: 12.8rem;

  @media (${devices.laptop}) {
    width: calc(100vw - 440px - var(--arrow-width));
  }

  .carousel.carousel-slider {
    overflow: initial;
  }
`

const Arrow = styled.div.attrs((props: { direction: string }) => ({
  direction: props.direction
}))`
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 5rem;
  background-color: var(--clr-black);
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  transition: background-color calc(var(--td-fast) / 2);

  ${props =>
    props.direction === 'right' &&
    css`
      right: 0;
    `}

  img {
    width: 1.2rem;
    margin: 1rem;
  }

  &:hover {
    background-color: var(--clr-dark-gray);
  }

  @media (${devices.laptop}) {
    right: calc(var(--arrow-width) / 2 * -1);

    ${props =>
      props.direction === 'right' &&
      css`
        right: calc(var(--arrow-width) * -1);
      `}
  }
`

const CarouselText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  flex: 1;

  h1 {
    font-size: var(--fs-600);
    margin-bottom: 2.5rem;
  }
`

const Content = styled(motion.div)`
  max-width: 85%;

  @media (${devices.laptop}) {
    max-width: 70%;
  }
`

const ButtonShop = styled.span`
  text-transform: uppercase;
  letter-spacing: 1rem;
  display: inline-block;
  margin-top: 3rem;
  cursor: pointer;
  padding: 2rem 2rem 2rem 0;
  transition: letter-spacing var(--td-fast) var(--ttf);

  &:hover {
    letter-spacing: 1.1rem;

    img {
      translate: 0.8rem;
    }
  }

  img {
    display: inline-block;
    margin-left: 1rem;
    transition: translate var(--td-fast) var(--ttf) 200ms;
  }
`

export default {
  Container,
  Arrow,
  CarouselS,
  CarouselText,
  Content,
  ButtonShop
}
