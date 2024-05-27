import React, { useState } from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';

export const MangaReaderPage = () => {
  const [chapterNumber, setChapterNumber] = useState(1); // Номер текущей главы

  // Заглушка для изображения манги
  const mangaPages = [
    'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    // ...другие страницы манги
  ];

  // Заглушка для списка глав
  const chapters = [
    { number: 1, title: 'Глава 1' },
    { number: 2, title: 'Глава 2' },
    { number: 3, title: 'Глава 3' },
    { number: 4, title: 'Глава 4' },

    // ...другие главы
  ];

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center">
          <p style={{color: '#eeeeee'}}>Глава {chapterNumber}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          {/* Компонент выбора главы */}
          <ListGroup>
            {chapters.map((chapter) => (
              <ListGroup.Item
                key={chapter.number}
                action
                onClick={() => setChapterNumber(chapter.number)}
                active={chapterNumber === chapter.number}
              >
                {chapter.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={9}>
          {/* Компонент для отображения страницы манги */}
          {mangaPages.map((page, index) => (
            <Image key={index} src={page} fluid />
          ))}
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center">
          {/* Подпись главы внизу страницы */}
          <p style={{ color: '#eeeeee' }}>Глава {chapterNumber}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MangaReaderPage;
