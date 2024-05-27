import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MangaCardFav = ({ title, chapter, description, releaseYear, imageUrl, rating, ageRating, onRemove }) => {
    return (
        <div style={{
            display: 'flex',
            marginBottom: '25px',
            width: '80%',
            alignItems: 'flex-start',
            color: '#eeeeee',
            backgroundColor: '#343434',
            borderRadius: '70px',
            padding: '20px',
            marginLeft: '-200px',
            marginRight:'50px',
            position: 'relative', // Добавлено для позиционирования кнопки удаления
        }}>
            <Link to={`/manga/${title}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '160px', backgroundColor: '#292929', marginLeft:'50px' }}>
                    <Card.Img variant="top" src={imageUrl} style={{ height: 'auto' }} />
                    {ageRating && (
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
                            {ageRating}
                        </span>
                    )}
                </Card>
            </Link>
            <div style={{ marginLeft: '15px' }}>
                <Link to={`/manga/${title}`} style={{ textDecoration: 'none' }}>
                    <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
                </Link>
                <p>{chapter}</p>
                <p>{description}</p>
                <p>{releaseYear}</p>
                <p>
                    {/* ...рейтинг и звезды */}
                </p>
            </div>
            {/* Кнопка удаления из избранного */}
            <button
                onClick={() => {/*onRemove(title)*/}}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'none',
                    border: 'none',
                    color: '#eeeeee',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    marginRight: '50px'
                }}
            >
                Удалить из избранного
            </button>
        </div>
    );
};

export default MangaCardFav;
