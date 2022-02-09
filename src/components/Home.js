import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Restaurants from "./Restaurants";

function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/restaurants.json")
        .then((response) => response.json())
        .then((data) => setHotels(data.restaurants));
    };
    fetchData();
  }, []);

  console.log("our data is", hotels);

  return (
    <>
    <Row>{hotels ?(
        hotels.map(item=>(
            <Col sm={12} md={8} lg={6} xl={3}>
                <Restaurants item={item}/>
            </Col>
        ))
    ):("error")}</Row>
    </>
  );
}

export default Home;
