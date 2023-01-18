import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import meat from '../Images/meat.jpeg';

function Checkout() {
      
    const alertMsg = () => {
        alert("Thank You!")
    }
    return (
        <div>
        <Card className="cardnew" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={meat} />
                    <Card.Body>
                        <Card.Title><b>Tender Loving & Delicious!</b></Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                        
                            <Button onClick={()=>alertMsg()}>Order Now</Button>
                        
                    </Card.Body>
                </Card>
        
        <div>
            <h1 className="contactInfo"></h1>
            <Link to="/">
                <Button style={{marginLeft: 5}}>Back</Button>
            </Link>
        </div>
        <footer className="footer">
                    <div className="container">
                        <span className="text-muted">Copyright © - 2023 Shopping Cart.com</span>
                    </div>
                </footer>
        </div>
    )
}

export default Checkout;