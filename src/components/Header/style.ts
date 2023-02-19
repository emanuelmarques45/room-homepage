import styled, { css } from 'styled-components'
import { devices } from '../../assets/GlobalStyle'

const Container = styled.header`
  width: 100%;
  height: 10rem;
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${devices.tablet}) {
    gap: 5rem;
    padding: 0 5rem;
    color: var(--clr-white);
  }
`
const Menu = styled.nav.attrs((props: { active: boolean }) => ({
  active: props.active
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
  background-color: var(--clr-white);
  scale: 1 0;
  transform-origin: top;
  opacity: 0;
  transition-property: scale, opacity;
  transition-duration: var(--td-fast);
  transition-timing-function: var(--ttf);

  ${props =>
    props.active &&
    css`
      scale: 1 1;
      opacity: 1;
    `}

  ul {
    height: 100%;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;

    @media (${devices.tablet}) {
      gap: 1rem;

      li {
        padding: 2rem;
        cursor: pointer;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: 30%;
          height: 5%;
          bottom: 0;
          left: 50%;
          translate: -50%;
          background-color: var(--clr-white);
          scale: 0 1;
          transition: scale calc(var(--td-fast) / 2);
        }

        &:hover::after {
          scale: 1 1;
        }
      }
    }
  }

  @media (${devices.tablet}) {
    scale: unset;
    opacity: unset;
    background-color: transparent;
    position: unset;

    ul {
      justify-content: flex-start;
    }
  }
`

const IconMenu = styled.div.attrs((props: { active: boolean }) => ({
  active: props.active
}))`
  height: 3.5rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  left: 1.5rem;
  top: 3.8rem;

  @media (${devices.tablet}) {
    display: none;
  }

  div {
    position: relative;
    height: 12%;
    width: 100%;
    background-color: var(--clr-white);
    transition-property: width, transform, background-color;
    transition-duration: var(--td-fast);
    transition-timing-function: var(--ttf);

    &::before,
    &::after {
      content: '';
      height: 100%;
      position: absolute;
      background-color: var(--clr-white);
      transition-property: width, transform, opacity, background-color;
      transition-duration: var(--td-fast);
      transition-timing-function: var(--ttf);
    }

    &::before {
      margin-top: 1rem;
      width: 85%;
    }

    &::after {
      margin-top: 2rem;
      width: 70%;
    }
  }

  ${props =>
    props.active &&
    css`
      div,
      div::before,
      div::after {
        background-color: var(--clr-gray);
      }

      div {
        width: 80%;
        transform: rotate(45deg) translate(20%, 280%);

        &::before {
          transform: translate(-50%);
          opacity: 0;
        }

        &::after {
          width: 100%;
          transform: rotate(-90deg) translate(2rem);
        }
      }
    `}
`

export default { Container, Menu, IconMenu }
