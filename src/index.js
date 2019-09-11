import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components'
// import pacific from './pacific.jpg'

const Container = styled.div`
  height: 100vh;
  background-color: #f3f3f3;
  display: grid;
  grid-template-columns: 2fr 8fr 2fr;
  grid-template-rows: 1fr 10fr 1fr;
  color: black;
  grid-template-areas: 
    "header header header"
    "sidebar-1 main sidebar-2"
    "footer footer footer";

  @media (max-width: 768px) {
    grid-template-columns: 2fr 5fr 2fr;
    grid-template-rows: 1fr 5fr 5fr 1fr;
    grid-template-areas:
      "header header header"
      "sidebar-1 main main"
      "sidebar-2 main main"
      "footer footer footer"
  }
`

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: header;
`

const NavBar = styled.ul`
  list-style: none;
  display: flex;
`

const NavItem = styled.li`
  font-size: 20px;
  color: black;
  padding: 10px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Sidebar1 = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: sidebar-1;
`

// const List = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const ListItem = styled.div`
//   font-size: 20px;
//   color: black;
//   padding: 10px 0;
//   text-shadow: 0.5px 0.5px rgba(0,0,0,0.5);
// `


const Main = styled(animated.main)`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: main;

`

const Sidebar2 = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: sidebar-2;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: footer
`

// const Image = styled.img`
//   height: 400px;
//   width: 400px;
//   border: 7px solid black;
//   border-radius: 4px;
//   box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.5);
// `

function App() {
  return (
    <Container>
      <Header>
        <NavBar>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavBar>
      </Header>
      <Sidebar1>
      </Sidebar1>
      <Main>
      </Main>
      <Sidebar2>
      </Sidebar2>
      <Footer />
    </Container>
  );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));
