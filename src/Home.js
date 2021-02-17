import React  from 'react'
import { Col, Image, Row, Button} from 'react-bootstrap';
import styled from 'styled-components';
import profile from './assets/images/profile.jpg';
import buttonResume from './assets/RaihanAkter.docx'

const Styles = styled.p`
    p {
        font-size: 18px;
    }
`;


export const Home = () => (
    <div> 
      <Styles>
      <Row>  
      <Col md={12} sm={8} smOffset={2}>
          <Image src={profile} height="200px" width="200px" className="about-profile-pic" rounded />
                    <p>Full stack web developer with Sr Automation Test Developer Bachelor’s in computer science and engineering certified in software testing tools and AWS including Kansas University in full stack web technologies. Skills in HTML, CSS, and JavaScript, jQuery, SQL with proficiency with automation testing in UFT, Selenium, ALM, JIRA and strengths in meeting deadlines, creativity, and teamwork. Passionate about approaching any programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites combined with adept problem-solving abilities and determination. Positioned to provide unique perspectives on how end users interact with websites and software platforms by leveraging background in digital marketing and finance.</p>
                    <a href={buttonResume} target="_blank" rel="noopener noreferrer" download>
                        <Button>
                            <i className="fas fa-download" />
                                Download File
                        </Button>
                    </a>
      </Col>
     </Row> 
     </Styles> 
  </div>
)
