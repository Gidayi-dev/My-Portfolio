import styled from "styled-components";
import GlobalStyles from "./global-styles/global-styles";

const Portfolio = styled.div`
 display: flex;
 height: 100vh
`;

const Sidebar = styled.div`
 width: 3rem;
 background-color: black;
 color: white;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 2rem;
 position: fixed;
 height: 100%;
`;

const Context = styled.div`
 margin-left: 3rem;
 padding: 2rem;
 width: calc(100% - 3rem);
 overflow-y: scroll;
`;

const GidayiImg = styled.img`
 border-radius: 50%;
 width: 15rem;
 object-fit: cover;
`;

const SocialIcons = styled.a`
 display: flex;
 justify-content: center;
 gap: 1rem;
 margin: 2rem 0;

 &:hover {
  color: blue;
 }
`;

const NavLink = styled.a`
 color: white;
 text-decoration: none;
 font-size: 1.8rem;
 margin: 1rem 0;
 cursor: pointer;
 text-align: left;
 width: 100%;
 
 &:hover {
  color: lightgray;
 }
`;

const HeroSection = styled.hero`
 background-image: url(666666666)
`

function App() {
  
  return (
    <>
      
    </>
  )
}

export default App;
