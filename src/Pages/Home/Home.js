import React from "react";
import { Card } from 'react-bootstrap';
import { Link, Route, Router } from 'react-router-dom'
import MangaCard from '../../Components/MangaCard';
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
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 3',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },

  {
    title: 'Манга 1',
    description: 'Глава',
    imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    rating: '8.5',
    ageRating: '18+'
  },
];

export const RecommendationsGrid = () => {
  return (
    <>
      <h4 style={{ color: '#eeeeee', margin: '80px 0 25px', marginLeft: '100px', fontWeight: 'bold' }}>Популярное</h4>
      <div style={{ display: 'grid', gridGap: '5px', gridTemplateColumns: 'repeat(5, 1fr)', justifyContent: 'center', gridGap: '20px', marginBottom: '20px', marginLeft: '100px'}}>
        {recommendationsData.map((item, index) => (
        <Link to={`/manga/${item.id}`}>
          <MangaCard
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          rating={item.rating}
          ageRating={item.ageRating}/>
            </Link>
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

export const NewsFeed = () => {
  return (
    <>
      <h4 style={{ color: '#eeeeee', fontWeight: 'bold', margin: '20px 0', marginLeft: '100px' }}>Последние обновления</h4>
      <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {newsData.map((news, index) => (
          <MangaCard
            key={index}
            title={news.title}
            description={news.description}
            imageUrl={news.imageUrl}
            rating={news.rating}
            ageRating={news.ageRating}
          />
        ))}
      </div>
    </>
  );
};
  
export default Home;

