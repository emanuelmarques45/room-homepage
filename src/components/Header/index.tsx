import { useState } from 'react'
import { logo } from '../../assets/images'
import Styled from './style'

export default function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false)
  return (
    <Styled.Container>
      <Styled.IconMenu
        onClick={() => setMenuIsActive(previous => !previous)}
        active={menuIsActive}
      >
        <div />
      </Styled.IconMenu>
      <img src={logo} alt="Logo" />
      <Styled.Menu active={menuIsActive}>
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </Styled.Menu>
    </Styled.Container>
  )
}
