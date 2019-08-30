import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components'
import { animated, useTransition, useSpring, useSprings} from 'react-spring'
import pacific from './pacific.jpg'

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

const NavBar = styled(animated.ul)`
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

const List = styled.div`
  display: flex;
  flex-direction: column;
`

const ListItem = styled(animated.div)`
  font-size: 20px;
  color: black;
  padding: 10px 0;
  text-shadow: 0.5px 0.5px rgba(0,0,0,0.5);
`


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

const Image = styled(animated.img)`
  height: 400px;
  width: 400px;
  border: 7px solid black;
  border-radius: 4px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.5);
`

// const [items, set] = useState([...])
// const transitions = useTransition(items, item => item.key, {
// from: { transform: 'translate3d(0,-40px,0)' },
// enter: { transform: 'translate3d(0,0px,0)' },
// leave: { transform: 'translate3d(0,-40px,0)' },
// })
// return transitions.map(({ item, props, key }) =>
// <animated.div key={key} style={props}>{item.text}</animated.div>
// )

const calculate = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const transformImage = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
// const transformImage = (s) => `scale(${s})`

function App() {
  const [sideBar1Items, setSidebar1Items] = useState(['Testing 1', 'Testing 2', 'Testing 3', 'Testing 4'])
  const transitions = useTransition(sideBar1Items, item => item, {
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    trail: 300,
  })
  const transitions2 = useTransition(sideBar1Items, item => item, {
    from: { opacity: 0, transform: 'translate3d(0, -40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0, -40px,0)' },
    trail: 300,
  })
  const [imageProps, setImageProps] = useSpring(() => ({ xys: [0,0,1] }))
  // const [imageProps, setImageProps] = useSpring(() => ({ scale: 1 }))
  const [navProps] = useSpring(() => ({ opacity: 1, from: { opacity: 0}, config: { duration: 800}}))
  return (
    <Container>
      <Header>
        <NavBar style={navProps}>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavBar>
      </Header>
      <Sidebar1>
        <List>
        {transitions.map(({ item, props, key}) => (
          <ListItem key={key} style={props}>{item}</ListItem>
        ))}
        </List>
      </Sidebar1>
      <Main style={navProps}>
        <Image 
          src={pacific}
          style={{ transform: imageProps.xys.interpolate(transformImage) }}
          // style={{ transform: imageProps.scale.interpolate(transformImage) }}
          // onMouseMove={() => setImageProps({ scale: 1.1 })}
          // onMouseLeave={() => setImageProps({ scale: 1 })}
          onMouseMove={({ clientX: x, clientY: y }) => setImageProps({ xys: calculate(x, y) })}
          onMouseLeave={() => setImageProps({ xys: [0, 0, 1] })}
        />
      </Main>
      <Sidebar2>
      <List>
        {transitions2.reverse().map(({ item, props, key}) => (
          <ListItem key={key} style={props}>{item}</ListItem>
        ))}
        </List>
      </Sidebar2>
      <Footer />
    </Container>
  );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));
