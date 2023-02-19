import styled from 'styled-components'
import { devices } from '../../assets/GlobalStyle'

const Container = styled.main`
  p {
    color: var(--clr-gray);
    font-weight: var(--fw-regular);
  }
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${devices.laptop}) {
    flex-direction: row;
  }
`

const TextContainer = styled.div`
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (${devices.laptop}) {
    padding: 0;
  }
`

const Text = styled.div`
  max-width: 85%;

  h3 {
    align-self: flex-start;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin-bottom: 2rem;
  }
`

export default { Container, About, TextContainer, Text }
