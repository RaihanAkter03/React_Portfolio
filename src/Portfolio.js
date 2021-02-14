import React from "react";
import { Card, CardColumns } from 'react-bootstrap';



export const Portfolio = () => (

  <CardColumns>

    <Card>
      <Card.Img variant="top" src="../assets/images/air.jpg" height="180px" width="180px" />
      <Card.Body>
        <Card.Title>Air Care</Card.Title>
        <Card.Text>
          Air care built with Server side API and javascript. Deployed with github. Application allow user to search city and state to see the air quality of the area and COVID
          results also.
      </Card.Text>
        <Card.Link href="https://github.com/timothykemp/aircare"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src="../assets/images/leaveanote.jpg" height="170px" width="180px" />
      <Card.Body>
        <Card.Title>Leave a Note</Card.Title>
        <Card.Text>
          Leave A note is a node express server application. Built on express Handlebars and MySQL database with a Sequelize ORM. This is a online collaborative application where User will able to communicate with there group , create , delete and update the notes .
      </Card.Text>
        <Card.Link href="https://github.com/BenjDG/Leave_A_Note"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src="../assets/images/application.PNG" height="180px" width="180px" />
      <Card.Body>
        <Card.Title>Eat Burger</Card.Title>
        <Card.Text>
          A fun burger logger. Users input burgers (stored in a mySQL table). Burgers available to be devoured are listed on the left (modified in the table). Press the "Devour Burger" button and devoured burgers are moved the Devoured list on the right. Built with MySQL, Node, Express, Express Handlebars, ORM and Javascript.
      </Card.Text>er
        <Card.Link href="https://github.com/RaihanAkter03/NodeExpressHandlebars-EatBurger"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>

    <Card className="pb-4">
      <Card.Img variant="top" src="../assets/images/note1.PNG" height="193px" width="180px" />
      <Card.Body>
        <Card.Title>Express Note Taker</Card.Title>
        <Card.Text>
          This is a note taker application . Built on express where user will be able to add , delete and update the notes .
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Express-Note-Taker"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>


    <Card>
      <Card.Img variant="top" src="../assets/images/weatherdashboard.GIF" height="154px" width="180px" />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
          A Javascript, Ajax and API weather application that displays current and 5-day forecasts for US cities. Searched cities are saved. OpenWeather API is used to retrieve weather data for cities. Last city search is displayed.
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Server-Side-APIs-Weather-Dashboard"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>


    <Card>
      <Card.Img variant="top" src="../assets/images/app1.PNG" height="170px" width="180px" />
      <Card.Body>
        <Card.Title>Workout Tracker</Card.Title>
        <Card.Text>
          Workout tracker is a MongoDB application . where user will be able to create work out different types. Finish existing workout.
          User also able to see workout dashboard as well.
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Workout-Tracker"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>


  </CardColumns>





)
