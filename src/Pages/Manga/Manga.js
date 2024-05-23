import React from 'react';
import { Card, Container, Row, Col, Image, Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const mangaData = {
    title: 'Название манги',
    releaseYear: 'Год выпуска',
    chapters: ['Глава 1', 'Глава 2', 'Глава 3'],
    description: 'Описание манги',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
};

export const MangaDescriptionPage = () => {
    //useParams, если у есть динамический URL
    const { mangaId } = useParams();

    // Здесь вы можете получить данные манги по ID, если они хранятся в базе данных или API
    //const manga = getMangaById(mangaId);
    const manga = mangaData;

    return (
        <Container>
            <Row className="my-4 align-items-start" style={{ marginLeft: '100px' }}> {/* Добавлен отступ слева */}
                <Col xs={12} md={4} className="text-center d-flex flex-column justify-content-start">
                    <Image src={manga.imageUrl} thumbnail style={{ maxWidth: '200px', alignSelf: 'flex-start' }} />
                    <Button variant="primary" style={{ marginTop: '10px', width: '200px' }}>Читать</Button>
                </Col>
                <Col xs={12} md={5}>
                    <h1>{manga.title}</h1>
                    <h2 style={{fontWeight: 'bold', color: '#eeeeee' }}>{manga.releaseYear}</h2>
                    <p style={{ color: '#eeeeee' }}>{manga.description}</p>
                </Col>
                <Col xs={12} md={3}>
                    <h3 style={{ color: '#eeeeee' }}>Главы</h3>
                    <ul>
                        {manga.chapters.map((chapter, index) => (
                            <li key={index} style={{ color: '#eeeeee' }}>{chapter}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};