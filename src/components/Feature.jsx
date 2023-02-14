import React from "react";
import Animate from "./Animate";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
function Feature(){
return(
  <Animate>
    <div id="features">
    <Card  className="class"style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="F-title">Simplicity </Card.Title>
        <Card.Subtitle className="mb-2 text-muted c-txt">Card Subtitle</Card.Subtitle>
        <Card.Text className="c-txt">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className="F-btn"variant="info">More</Button>
      </Card.Body>
    </Card>
    <Card className="class" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="F-title">Morden UI</Card.Title>
        <Card.Subtitle className="mb-2 text-muted c-txt">Card Subtitle</Card.Subtitle>
        <Card.Text className="c-txt">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className="F-btn"variant="info">More</Button>
      </Card.Body>
    </Card>
    <Card className="class" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="F-title">Color Correctness</Card.Title>
        <Card.Subtitle className="mb-2 text-muted c-txt">Card Subtitle</Card.Subtitle>
        <Card.Text className="c-txt">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className="F-btn"variant="info">More</Button>
      </Card.Body>
    </Card>
       </div>
    </Animate>
)
}
export default Feature;