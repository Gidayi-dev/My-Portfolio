import styled from "styled-components";
import GlobalStyles from "./global-styles/global-styles";
import { FaHome, FaGithub, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaBook, FaUser, FaClipboardList, FaProjectDiagram, FaComments } from "react-icons/fa"; 
import GidayiHero from "./assets/GidayiHero.jpg";
import GidayiHeashot from "./assets/GidayiHeashot.jpg";

const Portfolio = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 13rem;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: fixed;
  height: 100%;
`;

const Context = styled.div`
  margin-left: 13rem; // Ensure the context starts after the sidebar
  padding: 0;
  width: calc(100% - 13rem);
  overflow-y: scroll;
`;

const GidayiImg = styled.img`
  border-radius: 50%;
  width: 15rem;
  object-fit: cover;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;

  &:hover {
    color: lightgray;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  cursor: pointer;
  text-align: left;
  width: 100%;
  display: flex;
  align-items: center;

  &:hover {
    color: lightgray;
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${GidayiHero});
  background-size: cover;
  background-position: center;
  position: relative;
  margin-left: 0; // No margin
  padding-left: 2rem; // Adjust as needed to prevent overflow

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  color: darkorange;
  position: relative;
  z-index: 2;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: darkorange;
  position: relative;
  z-index: 2;
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  margin-top: 2rem;
`;

const AboutMeText = styled.div`
  margin-bottom: 1.5rem;
  margin-left: 1rem; // Adding margin for spacing from the sidebar
`;

const App = () => {
  return (
    <>
      <Portfolio>
        <Sidebar>
          <GidayiImg src={GidayiHeashot} alt="My Headshot" />
          <h2>Millyannah Gidayi</h2>
          <SocialIcons>
            <SocialIcon href="https://twitter.com/IMillyannah" target="_blank">
              <FaHome />
            </SocialIcon>
            <SocialIcon href="https://github.com/Gidayi-dev" target="_blank">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/millyannah-gidayi-b0889623a" target="_blank">
              <FaLinkedin />
            </SocialIcon>
          </SocialIcons>

          <NavLink href="#Home">
            <IconWrapper>
              <FaHome />
            </IconWrapper>
            Home
          </NavLink>
          <NavLink href="#About">
            <IconWrapper>
              <FaUser />
            </IconWrapper>
            About Us
          </NavLink>
          <NavLink href="#Resume">
            <IconWrapper>
              <FaBook />
            </IconWrapper>
            Resume
          </NavLink>
          <NavLink href="#Projects">
            <IconWrapper>
              <FaClipboardList />
            </IconWrapper>
            Projects
          </NavLink>
          <NavLink href="#Contact">
            <IconWrapper>
              <FaComments />
            </IconWrapper>
            Contact
          </NavLink>
        </Sidebar>

        <Context>
          <HeroSection id="home">
            <Name>Hi, I'm Millyannah</Name>
            <Subtitle>Software Engineer</Subtitle>
          </HeroSection>

          <AboutMeContainer>
            <AboutMeText>
              <h2>About Me</h2>
              <p>
                I am a talented, innovative Full-Stack Developer and Software
                Engineer with over two years of experience. My expertise includes HTML, 
                CSS, JavaScript, PostgreSQL, SQL, React, Node.js, and Express. I combine excellent 
                communication and customer service skills with a strong technical background. 
                I graduated with a Bachelor of Science in Mathematics and Computer Science and am 
                available for freelance opportunities.
              </p>
            </AboutMeText>

            <ul>
              <li>
                <IconWrapper>
                  <FaGithub />
                </IconWrapper>
                <a
                  href="https://github.com/Gidayi-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <IconWrapper>
                  <FaPhoneAlt />
                </IconWrapper>
                +254 745 691 986
              </li>
              <li>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                Murang'a, Kenya
              </li>
            </ul>
          </AboutMeContainer>
        </Context>
      </Portfolio>
    </>
  );
};

export default App;