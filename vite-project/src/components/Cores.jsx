import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Core = () => {
  const [cardsData, setCardsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = 'http://127.0.0.1:5000/core';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Fetched data:', response.data);

        if (response.status === 200 && Array.isArray(response.data)) {
          setCardsData(response.data);
        } else {
          throw new Error(`Unexpected data format or status code: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <Container>
      <Row>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : cardsData.length > 0 ? (
          cardsData.slice(0, 20).map((card, index) => (
            <Col
              key={card.id} // Use unique id as key
              xs={12} sm={6} md={4} lg={3}
              className={`mb-4 ${(index % 4 === 0 || index % 5 === 0) ? 'col-lg-4' : ''}`}
            >
              <Link to={`/core/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Card className="rounded shadow-sm h-100">
                  <Card.Img
                    variant="top"
                    src={card.imageUrl}
                    alt={card.description}
                    style={{
                      borderTopLeftRadius: '0.5rem',
                      borderTopRightRadius: '0.5rem',
                      objectFit: 'cover',
                      height: '200px', // Adjust height for consistent image size
                    }}
                  />
                  <Card.Body>
                    <Card.Text>{card.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p>No cards available</p>
        )}
      </Row>
    </Container>
  );
};

export default Core;
