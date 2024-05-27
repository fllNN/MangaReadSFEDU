import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MangaCardFav from '../../Components/MangaCardFav';

const favoritesData = [
    {
        title: 'Название',
        releaseYear: '2020',
        rating: '5',
        ageRating: '12+',
        chapter: 'Глава 10',
        description: 'Описание манги 1',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },

    {
        title: 'Название',
        releaseYear: '2020',
        rating: '5',
        ageRating: '12+',
        chapter: 'Глава 10',
        description: 'Описание манги 1',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },

    {
        title: 'Название',
        releaseYear: '2020',
        rating: '5',
        ageRating: '12+',
        chapter: 'Глава 10',
        description: 'Описание манги 1',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },
];

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
