import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import '../../styles.css';

export const MangaReaderPage = () => {
  const [chapterNumber, setChapterNumber] = useState(1); // Номер текущей главы

  // Заглушка для изображения манги
  const mangaPages = [
    'https://gen.jut.su/uploads/manga/1/01.png',
    'https://gen.jut.su/uploads/manga/1/02.png',
    'https://gen.jut.su/uploads/manga/1/03.png',
    'https://gen.jut.su/uploads/manga/1/04.png',
    'https://gen.jut.su/uploads/manga/1/05.png',
    'https://gen.jut.su/uploads/manga/1/06.png',
    'https://gen.jut.su/uploads/manga/1/07.png',
    'https://gen.jut.su/uploads/manga/1/08.png',
    'https://gen.jut.su/uploads/manga/1/09.png',
    'https://gen.jut.su/uploads/manga/1/10.png',
    'https://gen.jut.su/uploads/manga/1/11.png',
    'https://gen.jut.su/uploads/manga/1/12.png',
    'https://gen.jut.su/uploads/manga/1/13.png',
    'https://gen.jut.su/uploads/manga/1/14.png',
    'https://gen.jut.su/uploads/manga/1/15.png',
    'https://gen.jut.su/uploads/manga/1/16.png',
    'https://gen.jut.su/uploads/manga/1/17.png',
    'https://gen.jut.su/uploads/manga/1/18.png',
    'https://gen.jut.su/uploads/manga/1/19.png',
    'https://gen.jut.su/uploads/manga/1/20.png',
    'https://gen.jut.su/uploads/manga/1/21.png',
    'https://gen.jut.su/uploads/manga/1/22.png',
    'https://gen.jut.su/uploads/manga/1/23.png'
  ];

   // Заглушка для списка глав
   const chapters = [
    { number: 1, title: 'Глава 1' },
    { number: 2, title: 'Глава 2' },
    { number: 3, title: 'Глава 3' },
    { number: 4, title: 'Глава 4' },

    // ...другие главы
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Добавим обработчик прокрутки страницы
    const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const button = document.getElementById('scrollToTopButton');

      // Показываем кнопку, если прокрутка больше 100 пикселей
    if (scrollPosition > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  };

    window.addEventListener('scroll', handleScroll);

    // Очистка обработчика при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <Row>
      <Col xs={12} className="text-center">
      <button
            id="scrollToTopButton"
            className="btn-primary"
            onClick={handleScrollToTop}
            style={{
              display: 'none', // Скрываем кнопку по умолчанию
              borderRadius: '10px', // Скругленные края
            }}
          >
            Вернуться наверх
          </button>      </Col>
    </Row>
    </Container>
  );
};

export default MangaReaderPage;
