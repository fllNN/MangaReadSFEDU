import '../../styles.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CommentsSection from '../../Components/CommentsSection';
import axios from 'axios'

// const mangaData = {
//     title: 'Название манги',
//     releaseYear: 'Год выпуска',
//     chapters: ['Глава 1', 'Глава 2', 'Глава 3'],
//     description: 'Описание манги',
//     imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
// };

export const MangaDescriptionPage = () => {
    const { mangaId } = useParams(); // Получаем mangaId из URL
    const [manga, setManga] = useState(null); // Состояние для данных манги

    useEffect(() => {
        const fetchMangaData = async () => {
          try {
            const response = await axios.get(`https://raw.githubusercontent.com/fllNN/MangaReadSFEDU/dev-front/recommendationsData.json`);
            const mangaData = response.data.find(manga => manga.id === mangaId); // Ищем мангу по ID
            setManga(mangaData); // Обновляем состояние данными найденной манги
            console.log(manga)
          } catch (error) {
            console.error('Ошибка при получении данных о манге:', error);
          }
        };
      
        if (mangaId) {
          fetchMangaData();
        }
      }, [mangaId]);
    
    // const manga = mangaData;

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
    };

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    if (!manga) {
        return <div>Загрузка...</div>; // Или другой индикатор загрузки
    }

    return (
        <Container>
            <Row className="my-4 align-items-start" style={{ marginLeft: '100px' }}> {/* Добавлен отступ слева */}
                <Col xs={12} md={4} className="text-center d-flex flex-column justify-content-start">
                    <Image src={manga.imageUrl} thumbnail style={{ maxWidth: '200px', alignSelf: 'flex-start' }} />
                    <Link to={`/manga/${manga.id}/read`} style={{ display: 'inline-block', width: '150px' }}>
                    <Button variant="primary" style={{ marginTop: '10px', width: '100%' }}>Читать</Button>
                    </Link>
                    <Button variant={isFavorite ? 'danger' : 'outline-danger'} onClick={handleFavoriteClick} style={{ marginTop: '-37px', marginLeft: '155px', width: '50px' }}>
                        {isFavorite ? '❤️' : '🤍'}
                    </Button>
                </Col>
                <Col xs={12} md={5}>
                    <h1>{manga.title}</h1>
                    <h2 style={{fontWeight: 'bold', color: '#eeeeee' }}>{manga.releaseYear}</h2>
                    <p style={{ color: '#eeeeee' }}>{manga.description}</p>
                    <div className="star-rating">
                        {[...Array(10)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                            <span className="styles">&#9733;</span>
                            </button>
                        );
                        })}
                    </div>
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
            <CommentsSection />
        </Container>
    );
};