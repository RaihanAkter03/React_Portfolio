import React from 'react';
import { Jumbotron as Jumbo, Container }  from 'react-bootstrap';
import styled from 'styled-components';
import alaskaImage from '../assets/images/header-background.jpg'


const Styles = styled.div`
  .jumbo {
    background: url(${alaskaImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  p {
    font-size: 20px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>From mainframe to cloud I've coded a little bit of it all. Understand programming and think like a programmer.</p>
      </Container>
    </Jumbo>
  </Styles>
)


