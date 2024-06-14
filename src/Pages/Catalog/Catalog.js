import React from "react";
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../../styles.css';
import MangaCard from '../../Components/MangaCard';
import { useState, useEffect } from 'react';
import axios from "axios";

const mangaList = [
  {
    id: 'manga1',
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '10',
    ageRating: '18+'
  },

  {
    id: 'manga2',
    title: 'Манга 2',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/solo-leveling/a4c36514493444ccd2d1dd19e1231c74.jpg',
    rating: '9',
    ageRating: '18+'
  },

  {
    id: 'manga3',
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/return-volcano/652ceac5b9d286d3df09fd99e1103283.jpg',
    rating: '8',
    ageRating: '18+'
  },

  {
    id: 'manga4',
    title: 'Манга 4',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/god-of-blackfield/685951a1b2d45f5bc1fb0cfb554aef68.jpg',
    rating: '7',
    ageRating: '18+'
  },

  {
    id: 'manga5',
    title: 'Манга 5',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/necromancer-i-am-the-disaster/6df09f7fefa4128f89516254b7fd60ce.jpg',
    rating: '6',
    ageRating: '18+'
  },

  {
    id: 'manga6',
    title: 'Манга 6',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/baby-squirrels-are-all-goods/23efceae50d461590fcaebf1541189a7.jpg',
    rating: '5',
    ageRating: '18+'
  },

  {
    id: 'manga7',
    title: 'Манга 7',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/one-day-suddenly-seoul/0f1d6d1a6825fc203567f3219c3a5166.jpg',
    rating: '4',
    ageRating: '18+'
  },

  {
    id: 'manga8',
    title: 'Манга 8',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/kingdom/1b97256e9827cd558594c542f000817f.jpg',
    rating: '3',
    ageRating: '18+'
  },

  {
    id: 'manga9',
    title: 'Манга 9',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/delivery-man-from-moorim/cover_356ef6b3.png',
    rating: '2',
    ageRating: '18+'
  },

  {
    id: 'manga10',
    title: 'Манга 10',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/the-31st-piece-overturns-the-game-board/1586eab9ed1f2e3a453b0af5fd14edb1.jpg',
    rating: '1',
    ageRating: '18+'
  },

  {
    id: 'manga11',
    title: 'Манга 11',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/muscle-building/cover_5315c465.webp',
    rating: '7',
    ageRating: '18+'
  },

  {
    id: 'manga12',
    title: 'Манга 12',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/reincarnation-of-king-kwon/cover_1de0033a.png',
    rating: '5',
    ageRating: '18+'
  },

  {
    id: 'manga13',
    title: 'Манга 13',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/blade_of_demon_destruction/2b39e3f41d3e8edc73c55027263b86f2.jpg',
    rating: '8',
    ageRating: '18+'
  },

  {
    id: 'manga14',
    title: 'Манга 14',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/chainsaw-man/00652e7a654739597977b5d8a86a61bb.jpg',
    rating: '4',
    ageRating: '18+'
  },

  {
    id: 'manga15',
    title: 'Манга 15',
    description: 'Глава',
    imageUrl: 'https://remanga.org/media/titles/mushoku_tensei_if_i_get_to_a_parallel_universe_ill_bring/23c0da60ceb0af276cb1173ccc524406.jpg',
    rating: '6',
    ageRating: '18+'
  },
  ];

export const Catalog = () => {
      // Состояния для каждого фильтра
  const [genre, setGenre] = useState('Все');
  const [year, setYear] = useState('Все');
  const [chapters, setChapters] = useState('Все');

  // const [mangaList, setMangaList] = useState([]);

  // // Функция для получения данных с сервера
  // const fetchMangaList = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3000/manga', {
  //       params: {
  //         genre: genre !== 'Все' ? genre : undefined,
  //         year: year !== 'Все' ? year : undefined,
  //         chapters: chapters !== 'Все' ? chapters : undefined,
  //         _sort: 'rating',
  //         _order: 'desc'
  //       }
  //     });
  //     setMangaList(response.data);
  //   } catch (error) {
  //     console.error('Ошибка при получении данных:', error);
  //   }
  // };

  // Функция для сброса всех фильтров
  const resetFilters = () => {
    setGenre('Все');
    setYear('Все');
    setChapters('Все');
  };

  //  // Получение данных при монтировании компонента
  //  useEffect(() => {
  //   fetchMangaList();
  // }, [genre, year, chapters]);
  
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
                <Link to={`/manga/${manga.id}`}>
                <MangaCard className="mb-4" 
                key={index}
                title={manga.title}
                description={manga.description}
                imageUrl={manga.imageUrl}
                rating={manga.rating}
                ageRating={manga.ageRating}/>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Catalog;
