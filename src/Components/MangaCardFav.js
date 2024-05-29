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
                <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85em', color: '#eeeeee', fontWeight: 'bold', marginRight: '3px' }}>{rating}</span>
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
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.6-36.7 
                      36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46
                      46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4
                      46.4-33.7l-25-145.5 105.7-103c19-18.5
                      8.5-51-17.7-54.6l-146.1-21.3L316.7 17.8c-11.7-23.6-45.6-23.6-57.4 0z"
                    ></path>
                  </svg>
            </div>
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
