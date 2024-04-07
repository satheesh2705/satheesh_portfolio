import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/prj/wheather-app.png";
import projImg2 from "../assets/prj/blog-ui.jpeg";
import projImg3 from "../assets/prj/chat-gpt.png";
import projImg4 from "../assets/prj/cycle_ui.jpeg";
import projImg5 from "../assets/prj/insta-ui.jpeg";
import colorSharp2 from "../assets/img/keyboard.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Wheather_application",
      description: "API Integration for App",
      imgUrl: projImg3,
      imgUrl: projImg1,
      link:''
    },
    {
      title: "Blog_application",
      description: "UI for Mobile App using Flutter",
      imgUrl: projImg2,
      link:''
    },
    {
      title: "Chat_GPT",
      description: "API Integration for Mobile App",
      imgUrl: projImg3,
      link:''
    },
    {
      title: "Cycle_store",
      description: "E-commerce for web using Html&Css",
      imgUrl: projImg4,
      link:''
    },
    {
      title: "Instagram_UI",
      description: "Html &Css for web",
      imgUrl: projImg5,
      link:''
    }
   
  ];

  return (
    
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a passionate Full Stack Developer with one year of experience and currently in my final year of study, I have been actively involved in various web and mobile development projects. Below are some of my notable Flutter projects that showcase my expertise in mobile app development and also web development in reactjs</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p> </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
