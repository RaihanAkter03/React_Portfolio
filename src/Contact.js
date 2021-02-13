import  React from "react";
import { ListGroup } from 'react-bootstrap';

export const Contact = () => (
    <div>
        {/* <h3>Comunications</h3> */}

        <ListGroup>
        <ListGroup.Item action href="mailto:bfronz1906@me.com?subject=Contact from Bob Fronczak Portfolio" >  <i class="fas fa-envelope-open-text"></i> Email </ListGroup.Item>            
        <ListGroup.Item action href="https://github.com/BFronz" target="_blank"> <i class="fab fa-github-square"></i>  Github</ListGroup.Item>
        <ListGroup.Item action href="https://www.linkedin.com/in/robert-fronczak" target="_blank">  <i class="fab fa-linkedin"></i>  Linkedin</ListGroup.Item>
        <ListGroup.Item action href="https://www.robbiefronz.com" target="_blank"> <i class="fas fa-laptop"></i> WebSite</ListGroup.Item>
        <ListGroup.Item action href="https://twitter.com/bfronz1960" target="_blank"> <i class="fab fa-twitter-square"></i> Twitter</ListGroup.Item>
        <ListGroup.Item action href="assets/RobertFronczakResume2020.pdf" target="_blank"> <i class="fas fa-file"></i> Resume </ListGroup.Item>
    </ListGroup>
    
     </div>
)
