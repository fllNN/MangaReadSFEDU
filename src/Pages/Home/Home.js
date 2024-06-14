import React from "react";
import { Link } from 'react-router-dom'
import MangaCard from '../../Components/MangaCard';
import axios from 'axios';

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

// const [recommendationsData, setRecommendationsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:PORT/endpoint');
//         setRecommendationsData(response.data);
//       } catch (error) {
//         console.error('Ошибка при получении данных:', error);
//       }
//     };

//     fetchData();
//   }, []);


export const RecommendationsGrid = () => {
  return (
    <>
      <h4 style={{ color: '#eeeeee', margin: '80px 0 25px', marginLeft: '100px', fontWeight: 'bold' }}>Популярное</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', justifyContent: 'center', gridGap: '20px', marginBottom: '20px', marginLeft: '100px'}}>
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

// const [newsData, setNewsData] = useState([]);
  
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:PORT/endpoint');
//       setNewsData(response.data);
//     } catch (error) {
//       console.error('Ошибка при получении данных:', error);
//     }
//   };

//   fetchData();
// }, []);

export const NewsFeed = () => {

  return (
    <>
      <h4 style={{ color: '#eeeeee', fontWeight: 'bold', margin: '20px 0', marginLeft: '100px' }}>Последние обновления</h4>
      <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
        {newsData.map((news, index) => (
          <Link to={`/manga/${news.id}`}>
          <MangaCard
            key={index}
            title={news.title}
            description={news.description}
            imageUrl={news.imageUrl}
            rating={news.rating}
            ageRating={news.ageRating}
          />
          </Link>
        ))}
      </div>
    </>
  );
};
  
export default Home;

