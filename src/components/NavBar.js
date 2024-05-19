import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import x from '../assets/img/x.svg'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActionLink = (value) => {
    setActiveLink(value);
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/gourab-singha-6a0690245/', '_blank');
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon' />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActionLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActionLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActionLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActionLink('connect')}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://github.com/gourabsingha1' target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
              <a href='https://www.linkedin.com/in/gourab-singha-6a0690245/' target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
              <a href='https://x.com/gourabsingha__' target="_blank" rel="noopener noreferrer"><img src={x} alt="" /></a>
            </div>
            <button className='vvd' onClick={openLinkedIn}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}