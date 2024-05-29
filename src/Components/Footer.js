import React from "react";
import { Container } from "react-bootstrap";
import '../styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faYoutube, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
    <Container fluid className="footer">
        <Container style={{justifyContent: 'center'}}>
            <div style={{ fontSize: '1.7em'}}>
                <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faVk} color="#666666" style={{marginRight:'25px'}}/>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} color="#666666"style={{marginRight:'25px'}} />
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegramPlane} color="#666666" style={{marginRight:'25px'}}/>
                </a>
            </div>
            <p style={{ marginTop: '5px' }}>©2024 MangaRead.ru. Все права защищены.</p>
        </Container>
    </Container>
)
export default Footer;
