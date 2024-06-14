import React from 'react';
import MangaCardFav from '../../Components/MangaCardFav';
import axios from 'axios';

const favoritesData = [
    {
        title: 'Манга 1',
        releaseYear: '2000',
        rating: '9',
        ageRating: '12+',
        chapter: 'Глава 10',
        description: 'Описание манги 1',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },

    {
        title: 'Манга 2',
        releaseYear: '2020',
        rating: '7',
        ageRating: '14+',
        chapter: 'Глава 25',
        description: 'Описание манги 1',
        imageUrl: 'https://remanga.org/media/titles/solo-leveling/a4c36514493444ccd2d1dd19e1231c74.jpg',
    },

    {
        title: 'Манга 3',
        releaseYear: '2022',
        rating: '5',
        ageRating: '18+',
        chapter: 'Глава 14',
        description: 'Описание манги 1',
        imageUrl: 'https://remanga.org/media/titles/return-volcano/652ceac5b9d286d3df09fd99e1103283.jpg',
    },
];

// const [favoritesData, setfavoritesData] = useState([]);
  
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:PORT/endpoint');
//       setfavoritesData(response.data);
//     } catch (error) {
//       console.error('Ошибка при получении данных:', error);
//     }
//   };

//   fetchData();
// }, []);

export const Favorites = () => {
    return (
        <>
            <h2 style={{ color: '#eeeeee', fontWeight: 'bold', margin: '20px', marginLeft: '300px' }}>Манга, добавленная в избранное</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', marginLeft: '300px' }}>
                {favoritesData.map((manga, index) => (
                    
                    <MangaCardFav
                    key={index}
                    title={manga.title}
                    chapter={manga.chapter}
                    description={manga.description}
                    imageUrl={manga.imageUrl}
                    releaseYear={manga.releaseYear}
                    rating={manga.rating}
                    ageRating={manga.ageRating}/>
                ))}
            </div>
        </>
    );
};
