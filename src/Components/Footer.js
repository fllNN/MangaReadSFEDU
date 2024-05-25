import React from "react";
import { Container } from "react-bootstrap";
import '../styles.css'

const footerStyle = {
    bottom: 0,
    width: '100%',
    backgroundColor: '#343434',
    color: '#666666',
    display: 'flex',
    justifyContent: 'center'
};

const Footer = () => (
    <Container fluid style={footerStyle} className="footer">
        <Container style={{display:'flex', justifyContent: 'center'}}>
            <p>©2024 MangaRead.ru. Все права защищены.</p>
        </Container>
    </Container>
)
export default Footer;