import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/prj/social_media_app_reactjs.png";
import projImg2 from "../assets/prj/blog_app.png";
import projImg3 from "../assets/prj/weather_app.png";
import projImg4 from "../assets/prj/E-commerce.png";
import projImg5 from "../assets/prj/insta-ui.jpeg";
import projImg6 from "../assets/prj/zomato_clone.jpeg";
import colorSharp2 from "../assets/img/keyboard.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SocialMedia",
      description: " Real Time chats and Posts Social media Dynamic & Responsive App Using React.js ",
      imgUrl: projImg1,
      link:'https://github.com/satheesh2705/React_social_media'
    },
    {
      title: "Blog_Application",
      description: "A user-friendly Flutter Blog Application",
      imgUrl: projImg2,
      link:'#'
    },
    {
      title: "Weather_Application",
      description: "A user-friendly Flutter weather application utilizing a free REST API for accurate weather forecasts.",
      imgUrl: projImg3,
      link:'https://github.com/satheesh2705/wheather_app_flutter'
    },
    {
      title: "E-Commerce website",
      description: "Dynamic & Responsive Website By Using Html,Css & JavaScript" ,
      imgUrl: projImg4,
      link:'https://github.com/satheesh2705/E-commerce-website'
    },
    {
      title: "ZOMATO_UI",
      description: "Zomato clone built with HTML and CSS, replicating the interface",
      imgUrl: projImg6, 
      link:'https://github.com/satheesh2705/Zomata_Web'
    },
    {
      title: "Instagram_UI",
      description: "Instagram clone built with HTML and CSS, replicating the interface and functionality",
      imgUrl: projImg5,
      link:'https://github.com/satheesh2705/instagram_ui'
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
