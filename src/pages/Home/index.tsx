import { Carousel } from '../../components'
import Styled from './style'
import { imageAboutDark, imageAboutLight } from '../../assets/images'

export default function Home() {
  return (
    <Styled.Container>
      <Carousel />
      <Styled.About>
        <img src={imageAboutDark} alt="About image" />
        <Styled.TextContainer>
          <Styled.Text>
            <h3>about our furniture</h3>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional or contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </Styled.Text>
        </Styled.TextContainer>
        <img src={imageAboutLight} alt="About image" />
      </Styled.About>
    </Styled.Container>
  )
}
