import Styled from './style'
import {
  mobileImageHero1,
  mobileImageHero2,
  mobileImageHero3,
  desktopImageHero1,
  desktopImageHero2,
  desktopImageHero3,
  iconAngleLeft,
  iconAngleRight,
  iconArrow
} from '../../assets/images'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { devices } from '../../assets/GlobalStyle'
import { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const images = {
  mobile: [mobileImageHero1, mobileImageHero2, mobileImageHero3],
  desktop: [desktopImageHero1, desktopImageHero2, desktopImageHero3]
}

const items = [
  {
    title: 'Discover innovative ways to decorate',
    text: 'We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
  },
  {
    title: 'We are available all around the globe',
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    title: 'Manufactured with the best materials',
    text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
  }
]

const animation: Variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.6
    }
  }
}

export default function Carousel() {
  const [currentItem, setCurrentItem] = useState<number>(0)

  return (
    <Styled.Container>
      <Styled.CarouselS
        showArrows
        infiniteLoop
        transitionTime={600}
        useKeyboardArrows
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        swipeable
        onChange={index => setCurrentItem(index)}
        renderArrowPrev={clickHandler => {
          return (
            <Styled.Arrow onClick={clickHandler}>
              <img src={iconAngleLeft} />
            </Styled.Arrow>
          )
        }}
        renderArrowNext={clickHandler => (
          <Styled.Arrow onClick={clickHandler} direction="right">
            <img src={iconAngleRight} />
          </Styled.Arrow>
        )}
      >
        {images.mobile.map((image, index) => {
          return (
            <picture key={index}>
              <source srcSet={images.desktop[index]} media={devices.tabletS} />
              <img src={image} alt="Carousel image" />
            </picture>
          )
        })}
      </Styled.CarouselS>
      <Styled.CarouselText>
        <AnimatePresence mode="wait">
          <Styled.Content
            key={currentItem}
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1>{items[currentItem].title}</h1>
            <motion.p
              variants={animation}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {items[currentItem].text}
            </motion.p>
            <Styled.ButtonShop>
              shop now
              <motion.img
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  bounce: 1,
                  stiffness: 90
                }}
                src={iconArrow}
                alt="Arrow icon"
              />
            </Styled.ButtonShop>
          </Styled.Content>
        </AnimatePresence>
      </Styled.CarouselText>
    </Styled.Container>
  )
}
