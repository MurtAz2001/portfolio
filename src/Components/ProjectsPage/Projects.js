import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import youtube_img from '../../Assets/Project/youtube_clone.png'
import weather_img from '../../Assets/Project/weather.png'
import anime_img from '../../Assets/Project/anime_img.png'
import course_img from '../../Assets/Project/course_api.png'

function Projects() {
    return(
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{color:"white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent:'center', paddingBottom:"10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={youtube_img}
                        isBlog={false}
                        title="YouTube Clone"
                        description="Explore a dynamic YouTube clone built with React JS, seamlessly importing content through APIs."
                        ghLink="https://github.com/MurtAz2001/youtube_clone"
                        demoLink="https://murtaz2001.github.io/youtube_clone/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={weather_img}
                        isBlog={false}
                        title="Weather Info App"
                        description="Dynamic weather app using React.js and Vue.js , seamlessly importing real-time data from APIs for an interactive and responsive user experience."
                        ghLink="https://drive.google.com/drive/folders/1-unY0Jgixycyrnz9j-fI9h0MM6SQVyin"
                        demoLink={false}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={anime_img}
                        isBlog={false}
                        title="Anime List WebSite"
                        description="This WebSite is a minimalist anime list website developed using React.js. It offers a streamlined interface for users to search and access information about various anime titles. The website utilizes an online API to fetch real-time data, ensuring users have access to the latest information on anime series"
                        ghLink="https://github.com/MurtAz2001/FirstProject-anime-list"
                        demoLink={false}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCards
                        imgPath={course_img}
                        isBlog={false}
                        title="Course API"
                        description="Implemented a comprehensive Course API using the Spring Boot framework and microservices architecture,providing a scalable and efficient solution for managing and retrieving course-related information."
                        ghLink="https://github.com/MurtAz2001/course-api"
                        demoLink={false}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
        );
}
export default Projects;