import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
    <Container fluid style={{backgroundColor: '#343434', color: '#666666'}}>
        <Container style={{display:'flex', justifyContent: 'center'}}>
            <p>©2024 MangaRead.ru. Все права защищены.</p>
        </Container>
    </Container>
)
export default Footer;