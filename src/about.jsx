import styled from 'styled-components';
import { FaGithub, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa';  // Icons for the list items

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
`;

const AboutMeText = styled.div`
  margin-bottom: 1.5rem;
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
  margin-right: 8px;
`;

const AboutMe = () => (
  <AboutMeContainer>
    <AboutMeText>
      <h2>About Me</h2>
      <p>
        I am a talented, innovative Full-Stack Developer and Software Engineer with over two years of experience. 
        My expertise includes HTML, CSS, JavaScript, PostgreSQL, SQL, React, Node.js, and Express. I combine excellent 
        communication and customer service skills with a strong technical background. I graduated with a Bachelor of Science in 
        Mathematics and Computer Science and am available for freelance opportunities.
      </p>
    </AboutMeText>

    <DetailsList>
      <ListItem>
        <IconWrapper><FaGithub /></IconWrapper>
        <a href="https://github.com/Gidayi" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      </ListItem>
      <ListItem>
        <IconWrapper><FaPhoneAlt /></IconWrapper>
        +254 745 691 986
      </ListItem>
      <ListItem>
        <IconWrapper><FaMapMarkerAlt /></IconWrapper>
        Murang'a, Kenya
      </ListItem>
      <ListItem>
        <IconWrapper><FaBriefcase /></IconWrapper>
        Bachelor of Science in Mathematics and Computer Science
      </ListItem>
      <ListItem>
        <IconWrapper><FaEnvelope /></IconWrapper>
        <a href="mailto:millyannahi@gmail.com">millyannahi@gmail.com</a>
      </ListItem>
      <ListItem>
        <IconWrapper><FaBriefcase /></IconWrapper>
        Freelance: Available
      </ListItem>
    </DetailsList>
  </AboutMeContainer>
);

export default AboutMe;