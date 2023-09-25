import React from 'react';
import { Card } from 'react-bootstrap';
import Boton from './Boton';

const MyCard = ({ image, title, description, colorButton, textButton }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}></Card.Img>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Boton colorButton={colorButton} textButton={textButton} />
                </Card.Body>
            </Card>
        </>
    );
};

export default MyCard;