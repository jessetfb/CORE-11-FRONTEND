import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Core = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = 'http://127.0.0.1:5000/core'; // Backend API endpoint

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200 && Array.isArray(response.data)) {
          setCardsData(response.data);
        } else {
          console.error('Unexpected data format or status code:', response.status, response.data);
          setError('Unexpected data format or server issue.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  const getRandomShapeClass = () => {
    const classes = [
      'rounded-lg', // Rectangle
      'rounded-full', // Circle
      'rounded-md', // Slightly rounded square
      'rounded-tl-lg rounded-br-lg', // Angled shapes
      'rounded-b-lg', // Rectangle with bottom rounding
    ];
    return classes[Math.floor(Math.random() * classes.length)];
  };

  return (
    <Container>
      <Row>
        {loading ? (
          <Col xs={12} className="d-flex justify-content-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        ) : error ? (
          <Col xs={12}>
            <Alert variant="danger" className="text-center">{error}</Alert>
          </Col>
        ) : cardsData.length > 0 ? (
          cardsData.slice(0, 20).map((card, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 d-flex align-items-stretch"
            >
              <Link to={`/core/${card.id}`} className="block" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={`shadow-lg overflow-hidden ${getRandomShapeClass()} transition-transform transform hover:scale-105`}>
                  <img
                    src={card.media_url || 'https://via.placeholder.com/300x200?text=No+Image+Available'}
                    alt={card.title || 'Untitled'}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold">{card.title || 'Untitled'}</h3>
                    <p className="text-gray-700">{card.description || 'No description available'}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <Alert variant="info" className="text-center">No cards available</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Core;
