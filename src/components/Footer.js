import { Container, Row, Col } from "react-bootstrap";
import github from '../assets/img/github-mark-white.svg'
import linkedin from '../assets/img/linkedin-white.svg'
import x from '../assets/img/x-white.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/gourabsingha1" target="_blank" rel="noopener noreferrer"><img src={github} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/gourab-singha-6a0690245/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="Icon" /></a>
              <a href="https://x.com/gourabsingha__" target="_blank" rel="noopener noreferrer"><img src={x} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}