import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => window.open(repoUrl, '_blank')}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}