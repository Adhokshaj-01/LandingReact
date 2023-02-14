import React from "react";
import Card from 'react-bootstrap/Card'
import Animate from "./Animate";
import abt1 from "../images/abt1.webp";
function About(){
return(
    <Animate>
    <div id="about">
    <Card>
        <Card.Img className='abt-img' variant="top" src={abt1}/>
        <Card.Body>
          <h1 className="abt-m-txt">ABOUT</h1>
          <Card.Text className="abt-txt">
            &nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,<br/> 
            &nbsp;quae qui quam odit ullam consequuntur? Impedit, facere ad ea odio saepe 
            &nbsp;in vero deserunt, voluptatem, ab temporibus praesentium dignissimos accusantium?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </Animate>
)
}
export default About;