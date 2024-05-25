import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../../styles.css';
import MangaCard from '../../Components/MangaCard';
import { useState } from 'react';

const mangaList = [
    {
      title: 'Манга 1',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 2',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  
    {
      title: 'Манга 3',
      description: 'Глава',
      imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
      rating: '8',
      ageRating: '18+'
    },
  ];

export const Catalog = () => {
      // Состояния для каждого фильтра
  const [genre, setGenre] = useState('Все');
  const [year, setYear] = useState('Все');
  const [chapters, setChapters] = useState('Все');


  // Функция для сброса всех фильтров
  const resetFilters = () => {
    setGenre('Все');
    setYear('Все');
    setChapters('Все');
  };
  
  return (
    <Container fluid>
      <Row>
        {/* Колонка фильтров */}
        <Col xs={12} md={3} className="filter-column">
          <Card className="filter-card">
            <Card.Header>Фильтры</Card.Header>
            <Card.Body>
            <Form className="form-group form-control ">
                {/* Фильтр по жанру */}
                <Form.Group controlId="filterGenre" style={{marginBottom: '20px'}}>
                <Form.Label>Жанр</Form.Label>
                <Form.Control as="select" value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option>Все</option>
                    <option>Приключения</option>
                    <option>Фэнтези</option>
                    <option>Романтика</option>
                    {/* ... другие жанры ... */}
                </Form.Control>
                </Form.Group>

                {/* Фильтр по году выхода */}
                <Form.Group controlId="filterYear" style={{marginBottom: '20px'}}>
                <Form.Label>Год выхода</Form.Label>
                <Form.Control as="select" value={year} onChange={(e) => setYear(e.target.value)}>
                    <option>Все</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    {/* ... другие годы ... */}
                </Form.Control>
                </Form.Group>

                {/* Фильтр по количеству глав */}
                <Form.Group controlId="filterChapters" style={{marginBottom: '20px'}}>
                <Form.Label>Количество глав</Form.Label>
                <Form.Control as="select" value={chapters} onChange={(e) => setChapters(e.target.value)}>
                    <option>Все</option>
                    <option>1-10</option>
                    <option>11-50</option>
                    <option>51-100</option>
                    {/* ... другие диапазоны ... */}
                </Form.Control>
                </Form.Group>
                <Button onClick={resetFilters}>Сбросить фильтры</Button>
            </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Колонка с карточками манги */}
        <Col xs={12} md={9}>
          <Row style={{marginTop: '20px'}}>
            {mangaList.map((manga, index) => (
              <Col xs={12} sm={6} md={4} lg={3} key={index}>
                <MangaCard className="mb-4" 
                key={index}
                title={manga.title}
                description={manga.description}
                imageUrl={manga.imageUrl}
                rating={manga.rating}
                ageRating={manga.ageRating}/>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Catalog;
