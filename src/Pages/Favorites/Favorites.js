import React from 'react';
import { Card } from 'react-bootstrap';

const favoritesData = [
    {
        title: 'Манга 1',
        releaseYear: '2020',
        chapter: 'Глава 10',
        description: 'Описание манги 1',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },

    {
        title: 'Манга 2',
        releaseYear: '2020',
        chapter: 'Глава 10',
        description: 'Описание манги 2',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },

    {
        title: 'Манга 3',
        releaseYear: '2020',
        chapter: 'Глава 10',
        description: 'Описание манги 3',
        imageUrl: 'https://xlm.ru/storage/uploads/images/2021/01/11/GgFj6JSC832ES6mhh5dXHCIw0YzXH1wTh5zEkLos.jpeg',
    },
];

export const Favorites = () => {
    return (
        <>
            <h2 style={{ color: '#eeeeee', fontWeight: 'bold', margin: '20px', marginLeft: '300px' }}>Манга, добавленная в избранное</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px', marginLeft: '300px' }}>
                {favoritesData.map((manga, index) => (
                    <div key={index} style={{ display: 'flex', marginBottom: '10px', width: '100%', alignItems: 'flex-start', color: '#eeeeee' }}>
                        <Card style={{ width: '160px', backgroundColor: '#292929' }}>
                            <Card.Img variant="top" src={manga.imageUrl} style={{ height: 'auto' }} />
                        </Card>
                        <div style={{ marginLeft: '15px' }}>
                            <h5>{manga.title}</h5>
                            <h6>{manga.releaseYear}</h6>
                            <p>{manga.chapter}</p>
                            <p>{manga.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
