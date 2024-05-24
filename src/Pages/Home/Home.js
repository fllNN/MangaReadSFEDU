import React from "react";
import { Card } from 'react-bootstrap';
import { Link, Route, Router } from 'react-router-dom'
// import { MangaDescriptionPage } from './Pages/Manga/Manga';

export const Home = () => (
  <>
  <NewsFeed />
  <Banner />
  <RecommendationsGrid />
  </>
)

const recommendationsData = [
  {
    id: 'manga1',
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 2',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },
];

export const RecommendationsGrid = () => {
  return (
    <>
      <h4 style={{ color: '#eeeeee', margin: '80px 0 25px', marginLeft: '100px', fontWeight: 'bold' }}>Популярное</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', justifyContent: 'center', gridGap: '20px', marginBottom: '20px' }}>
        {recommendationsData.map((item, index) => (
          <Card key={index} style={{ width: '160px', marginLeft: '50px', backgroundColor: '#292929' }}>
            <Link to={`/manga/${item.id}`}>
              <Card.Img variant="top" src={item.imageUrl} style={{ width: '160px', height: 'auto' }} />
            </Link>
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Card.Title style={{ fontSize: '0.85em', color: '#eeeeee' }}>{item.title}</Card.Title>
                <span style={{ fontSize: '0.85em', color: '#eeeeee', fontWeight: 'bold', marginLeft: '3px' }}>{item.rating}</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="star"
                  className="svg-inline--fa fa-star fa-w-18"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  style={{ width: '16px', height: '16px', fill: '#eeeeee' }}
                >
                  <path
                    fill="#eeeeee"
                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.6-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-51-17.7-54.6l-146.1-21.3L316.7 17.8c-11.7-23.6-45.6-23.6-57.4 0z"
                  ></path>
                </svg>
              </div>
              <Card.Text style={{ fontSize: '0.75em', color: '#eeeeee' }}>{item.description}</Card.Text>
              <span
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  fontSize: '0.75em',
                  color: '#eeeeee',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '2px 5px',
                  borderRadius: '3px',
                }}
              >
                {item.ageRating}
              </span>
            </Card.Body>
          </Card>
        ))}
      </div>
      {/* <Router>
        <Route path="/manga/:mangaId" element={<MangaDescriptionPage />} />
      </Router> */}
    </>
  );
};


const bannerStyle = {
  width: '100%', // Ширина на всю страницу
  height: '730px', // Высота баннера
  backgroundImage: 'url(https://leonardo.osnova.io/c58b2641-07a5-5b65-bff4-143a34f06174/-/preview/2700x/)',
  backgroundSize: 'cover', // Обложка для полного покрытия баннера
  backgroundPosition: 'center', // Центрирование изображения
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end', // Выравнивание содержимого к нижнему краю
  padding: '20px', // Отступ, равный отступу от навигационной панели
  margin: '33px 0' // Отступ сверху и снизу
};

const textShadowStyle = {
  color: '#ffffff',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Добавляем тень
};

export const Banner = () => (
  <div style={bannerStyle}>
    <h1 style={textShadowStyle}>Долгожданная премьера</h1>
    <h2 style={{ color: '#ffffff', margin: '10px 0 0', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', fontWeight: 'bold' }}>Название</h2>
  </div>
);

const newsData = [
  {
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '1.1',
    ageRating: '18+'
  },

  {
    title: 'Манга 2',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '5.6'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '10'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
  },
];

export const NewsFeed = () => {
  return (
    <>
      <h4 style={{ color: '#eeeeee', fontWeight: 'bold', margin: '20px 0', marginLeft: '100px' }}>Последние обновления</h4>
      <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {newsData.map((news, index) => (
          <Card key={index} style={{ width: '160px', margin: '5px', flex: '0 0 auto', backgroundColor: '#292929' }}>
            <div style={{ position: 'relative' }}>
              <Card.Img variant="top" src={news.imageUrl} style={{ width: '160px', height: 'auto' }} />
              <span
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  fontSize: '0.75em',
                  color: '#eeeeee',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '2px 5px',
                  borderRadius: '3px',
                }}
              >
                {news.ageRating}
              </span>
            </div>
            <Card.Body>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Card.Title style={{ fontSize: '0.85em', color: '#eeeeee' }}>{news.title}</Card.Title>
                  <Card.Text style={{ fontSize: '0.75em', color: '#eeeeee' }}>{news.description}</Card.Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85em', color: '#eeeeee', fontWeight: 'bold', marginRight: '3px' }}>{news.rating}</span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className="svg-inline--fa fa-star fa-w-18"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    style={{ width: '16px', height: '16px', fill: '#eeeeee' }}
                  >
                    <path
                      fill="#eeeeee"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.6-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-51-17.7-54.6l-146.1-21.3L316.7 17.8c-11.7-23.6-45.6-23.6-57.4 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
  
export default Home;

