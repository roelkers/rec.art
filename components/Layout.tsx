import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled, { createGlobalStyle, DefaultTheme, ThemeProvider } from 'styled-components'

type Props = {
  children?: ReactNode
  navigation: { name: string, link: string }[]
  title?: string
}

// interface Theme extends DefaultTheme {
//   colors: {
//    [key: string] : string;
//   } 
// }

const theme: DefaultTheme = {
  colors: {
    primary:  '#00414D',
    secondary: '#9E0D4E',
    tertiary : '#FF7300',
    white: '#eeeeff',
    black: '#000000' 
  }
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    height: 100%;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  body, #__next {
    margin: 0;
    height: 100%;
    width: 100%;
  }
  
  h1 {
    font-size: 3rem;
  }
  
  h2 {
    font-size: 2.5rem;
  }
  
  p, a {
    font-size: 1.4rem;
  }
`;


const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 12rem 2rem 1fr 3rem;
  grid-template-columns: 15rem 1fr;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`

const Nav = styled.div`
  height: 100%;
  display: flex;
  /* grid-gap: 1rem;  
  grid-template-columns: 10rem repeat(5, 1fr); */
  justify-content: flex-start;
  align-items: center;
`

const Header = styled.div`
  padding: 2rem; 
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  background-color: #2C8F9C;
  box-shadow: 0 0.25rem 0.5rem #2C8F9C; 
`

const Sidebar = styled.span`
  background-color:  ${(props) => props.theme.colors.secondary};
  border-radius: 0 2rem 2rem 0;
  box-shadow: 0 0.5rem 1rem ${(props) => props.theme.colors.secondary}; 
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`

const SideNav = styled.ul`
  padding: 2rem;
`

const ListItem = styled.li`
  list-style: none; 
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  &:link, &:visited {
    
  }
  &:hover, &:active {
    transform: scale(1.025);
    font-style: italic;
  } 
`

const Content = styled.span`
  padding: 0 4rem;
  grid-row: 3 / 4;
  grid-column: 2 / -1;

`

const Navlink = styled.a`
  transition: 0.3s all;
  font-size: 2rem;
  margin: 0 1rem;
  cursor: pointer;
  &:link, &:visited {
    
  }
  &:hover, &:active {
    transform: scale(1.025);
    text-decoration: underline; 
  } 
`


const Footer = styled.a`
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;

`
const Logo = styled.div`
  margin-right: 4rem;
  font-size: 4rem;
  font-family: 'Rubik Mono One', sans-serif;
  color: ${(props) => props.theme.colors.black};
`

const Sublogo = styled.div`
  font-size: 1.8rem;
  color: #cccccc;
  font-weight: 700;
  letter-spacing: 0.5rem;
`

const Footerlink = styled.a`
  font-size: 1.2rem;
  transition: .3s all;
  margin-right: 1rem;
  align-items: center;
  cursor: pointer;
  &:link, &:visited {
    
  }
  &:hover, &:active {
    transform: scale(1.025);
    text-decoration: underline; 
  } 
`

const Layout = ({ children, navigation, title = 'This is the default title' }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,700&family=Rubik+Mono+One&display=swap" rel="stylesheet"></link>
    </Head>
    <Body>
      <Header>
        <Nav>
          <Link href="/">
            <div>
            <Logo> Rec.Art </Logo>
            <Sublogo>Lorem ipsum dolor</Sublogo>
            </div>
          </Link>
          <Link href="/">
            <Navlink>Home</Navlink>
          </Link>
          <Link href="/about">
            <Navlink>Über Uns</Navlink>
          </Link>
          <Link href="/shop">
            <Navlink>Kunst</Navlink>
          </Link>
          <Link href="/contact">
            <Navlink >
              Kontakt
          </Navlink>
          </Link>
        </Nav>
      </Header>
      <Sidebar>
        <SideNav>
          {navigation.map(n => (
          <Link href={n.link}>
            <ListItem>{n.name}</ListItem>
          </Link>
          ))}
        </SideNav>
      </Sidebar>
      <Content>
        {children}
      </Content>
      <Footer>
        <Link href="/impressum" ><Footerlink>Impressum</Footerlink></Link>
        <Link href="/data-protection" ><Footerlink>Datenschutzerklärung</Footerlink></Link>
      </Footer>
    </Body>
  </ThemeProvider>
)

export default Layout
