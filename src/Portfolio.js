import React from "react";
import { Card, CardColumns } from 'react-bootstrap';
import air from './assets/images/air.JPG'
import leaveanote from './assets/images/leaveanote.JPG'
import burger from './assets/images/application.PNG'
import notetaker from './assets/images/note1.PNG'
import weather from './assets/images/weatherdashboard.GIF'
import workout from './assets/images/app1.PNG'
import schedule from './assets/images/app.GIF'


export const Portfolio = () => (

  <CardColumns>

    <Card>
      <Card.Img variant="top" src={air} height="180px" width="180px" />
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
      <Card.Img variant="top" src={leaveanote} height="170px" width="180px" />
      <Card.Body>
        <Card.Title>Leave a Note</Card.Title>
        <Card.Text>
          Leave A note is a node express server application. Built on express Handlebars and MySQL database with a Sequelize ORM. This is a online collaborative application where User will able to communicate with there group , create , delete and update the notes .
      </Card.Text>
        <Card.Link href="https://github.com/BenjDG/Leave_A_Note"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={burger} height="180px" width="180px" />
      <Card.Body>
        <Card.Title>Eat Burger</Card.Title>
        <Card.Text>
          A fun burger logger. Users input burgers (stored in a mySQL table). Burgers available to be devoured are listed on the left (modified in the table). Press the "Devour Burger" button and devoured burgers are moved the Devoured list on the right. Built with MySQL, Node, Express, Express Handlebars, ORM and Javascript.
      </Card.Text>er
        <Card.Link href="https://github.com/RaihanAkter03/NodeExpressHandlebars-EatBurger"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>

    <Card className="pb-4">
      <Card.Img variant="top" src={notetaker} height="193px" width="180px" />
      <Card.Body>
        <Card.Title>Express Note Taker</Card.Title>
        <Card.Text>
          This is a note taker application . Built on express where user will be able to add , delete and update the notes .
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Express-Note-Taker"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>


    <Card>
      <Card.Img variant="top" src={weather} height="154px" width="180px" />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
          A Javascript, Ajax and API weather application that displays current and 5-day forecasts for US cities. Searched cities are saved. OpenWeather API is used to retrieve weather data for cities. Last city search is displayed.
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Server-Side-APIs-Weather-Dashboard"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>


    <Card>
      <Card.Img variant="top" src={workout} height="170px" width="180px" />
      <Card.Body>
        <Card.Title>Workout Tracker</Card.Title>
        <Card.Text>
          Workout tracker is a MongoDB application . where user will be able to create work out different types. Finish existing workout.
          User also able to see workout dashboard as well.
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Workout-Tracker"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>

    <Card>
      <Card.Img variant="top" src={schedule} height="170px" width="180px" />
      <Card.Body>
        <Card.Title>Work Day Schedule</Card.Title>
        <Card.Text>
          Work Day Schedule is a application built with Javascript where user will be able to add there schedule on time to time manner. if time passed color will changed as gray. User will able to exit the schedule and save it and color will be green. Current schedule will be on red colored.
      </Card.Text>
        <Card.Link href="https://github.com/RaihanAkter03/Third-Party-APIs-Work-Day-Scheduler"><i class="fas fa-external-link-alt"></i>Find out more</Card.Link>
      </Card.Body>
    </Card>
  </CardColumns>





)
