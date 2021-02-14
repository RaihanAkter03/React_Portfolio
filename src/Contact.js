import  React from "react";
import { ListGroup } from 'react-bootstrap';

export const Contact = () => (
    <div>
        <ListGroup>
            <ListGroup.Item action href="mailto:raihanakter26@gmail.com?subject=Contact from Raihan's Portfolio" >  <i class="fas fa-envelope-open-text"></i> Email </ListGroup.Item>
            <ListGroup.Item action href="https://github.com/RaihanAkter03" target="_blank"> <i class="fab fa-github-square"></i>  Github</ListGroup.Item>
            <ListGroup.Item action href="" target="_blank">  <i class="fab fa-linkedin"></i>  Linkedin</ListGroup.Item>
            <ListGroup.Item action href="https://github.com/RaihanAkter03/React_Portfolio" target="_blank"> <i class="fas fa-laptop"></i> WebSite</ListGroup.Item>
            <ListGroup.Item action href="assets/RaihanAkter.docx" target="_blank"> <i class="fas fa-file"></i> Resume </ListGroup.Item>
        </ListGroup>
    
     </div>
)
