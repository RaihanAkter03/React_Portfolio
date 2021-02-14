import React  from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';


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
        <Image src="../assets/images/profile.jpg" height="200px" width="200px" className="about-profile-pic" rounded />
        <p>Skilled software developer in the industrial supplier space. Experienced in all stages of software development and project management. Well-versed in current programming languages, techniques and best practices. Deep knowledge of all elements of business: supervision, product management, finance, customer acquisition and customer service.</p>
      </Col>
     </Row> 
     </Styles> 
  </div>
)
