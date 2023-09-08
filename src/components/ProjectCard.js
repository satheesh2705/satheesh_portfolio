import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
  
   <a href= {link } >
   <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 style={{color:'white' }}>{title}</h4>
          <span style={{color:'white' }}> {description}</span>
          
        </div>
      </div>
   </a>
    </Col>
  )
}
