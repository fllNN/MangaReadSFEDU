import React from 'react';
import Card from 'react-bootstrap/Card';

const MangaCard = ({ id, title, description, imageUrl, rating, ageRating }) => {
    return (
      <Card style={{ width: '160px', margin: '5px', flex: '0 0 auto', backgroundColor: '#292929' }}>
        <div style={{ position: 'relative' }}>
          <Card.Img variant="top" src={imageUrl} style={{ width: '160px', height: 'auto' }} />
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
        </div>
        <Card.Body>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Card.Title style={{ fontSize: '0.85em', color: '#eeeeee' }}>{title}</Card.Title>
              <Card.Text style={{ fontSize: '0.75em', color: '#eeeeee' }}>{description}</Card.Text>
            </div>
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
          </div>
        </Card.Body>
      </Card>
    );
  };

  export default MangaCard;