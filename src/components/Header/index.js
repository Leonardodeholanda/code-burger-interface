import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  ContainerRight,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/products')}
          isActive={pathname.includes('/products')}
        >
          Products
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push('/cart')}>
          <img src={Cart} alt="cart" />
        </PageLink>
        <Line></Line>
        <PageLink>
          {' '}
          <img src={Person} alt="person logo" />
        </PageLink>
        <ContainerText>
          <p>Hello, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Log Out</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
