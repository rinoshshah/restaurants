import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Restaurants({ item }) {
  return (
    <Link to={`restaurant/${item.name}/${item.id}`}>
      <Card className="my-2 p-3 rounded">
        <Card.Img variant="top" src={item.photograph}></Card.Img>
        <Card.Title as='div' className="text-center p-2">
          <h5>{item.name}</h5>
        </Card.Title>
        <Card.Text as='div' className="text-center">
          <p>{item.cuisine_type}</p>
        </Card.Text>
        <Card.Title as='div' className="text-center">
            <p>{item.neighborhood}</p>

        </Card.Title>
      </Card>
    </Link>
  );
}

export default Restaurants;
