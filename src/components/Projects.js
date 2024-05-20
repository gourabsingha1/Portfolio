import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import listmaker from "../assets/img/listmaker.png";
import findit from "../assets/img/findit.png";
import fdcare from "../assets/img/fdcare.png";
import savenotes from "../assets/img/savenotes.png";
import mynotesapp from "../assets/img/mynotesapp.jpg";
import toDoApp from "../assets/img/toDoApp.png";
import geminiClone from "../assets/img/geminiClone.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "List Maker",
      description: "Create lists easily using AI",
      imgUrl: listmaker,
      repoUrl: "https://github.com/gourabsingha1/ListMaker",
    },
    {
      title: "Find It",
      description: "Find products at your nearest store",
      imgUrl: findit,
      repoUrl: "https://github.com/gourabsingha1/Find-It",
    },
    {
      title: "FD_CARE",
      description: "Fall detection system for elderly care",
      imgUrl: fdcare,
      repoUrl: "https://github.com/gourabsingha1/FD-Care",
    },
    {
      title: "Save Notes",
      description: "Notes App made with MVVM and Firebase",
      imgUrl: savenotes,
      repoUrl: "https://github.com/gourabsingha1/Save-Notes",
    },
  ];

  const projects2 = [
    {
      title: "My Notes App",
      description: "Notes App made with React Native",
      imgUrl: mynotesapp,
      repoUrl: "https://github.com/gourabsingha1/MyNotesApp",
    },
  ];

  const projects3 = [
    {
      title: "Todo App",
      description: "A simple To Do App made with React",
      imgUrl: toDoApp,
      repoUrl: "https://github.com/gourabsingha1/todo_app",
    },
    {
      title: "Gemini Clone",
      description: "Google's Gemini AI clone",
      imgUrl: geminiClone,
      repoUrl: "https://github.com/gourabsingha1/Gemini-Clone",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2><br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Android Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Hybrid App Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Web Development</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}