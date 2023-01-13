import React from "react";
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import chicken from '../Images/chicken.jpg';
import goat from '../Images/goat.jfif';
import cow from '../Images/cow.jpg';


function MainPage() {
    return (
        <div>
            <div> <h1 className="mainHead">Shopping Cart.com</h1> </div>
            <div className="cardDiv">
                <Card className="cards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={chicken} />
                    <Card.Body>
                        <Card.Title><b>Chicken</b></Card.Title>
                        <Card.Text>
                            Our Delicious Poultry Chicken
                        </Card.Text>
                        <Link to={{
                            pathname: "/checkout",
                        }}>
                        <Button>Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="cards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={goat} />
                    <Card.Body>
                        <Card.Title><b>Mutton</b></Card.Title>
                        <Card.Text>
                            Our Delicious Mutton Meat
                        </Card.Text>
                        <Link to={{
                            pathname: "/checkout",
                        }}>
                            <Button>Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="cards" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cow} />
                    <Card.Body>
                        <Card.Title><b>Beef</b></Card.Title>
                        <Card.Text>
                            Our Delicious Beef Meat
                        </Card.Text>
                        <Link to={{
                            pathname: "/checkout",
                        }}>
                            <Button>Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">Copyright © - 2023 Shopping Cart.com</span>
                    </div>
                </footer>
            </div>
        </div>

    )
}

export default MainPage;