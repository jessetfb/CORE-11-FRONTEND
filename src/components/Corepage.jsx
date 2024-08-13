import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Dropdown } from 'react-bootstrap';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:5000';

const CorePage = ({ isAdmin }) => {
  const { id } = useParams(); 
  const [core, setCore] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const fetchCore = async () => {
      try {
        const response = await axios.get(`${apiUrl}/core/${id}`);
        const coreData = response.data;
        setCore(coreData);
        setComments(coreData.comments || []);
        setIsLiked(coreData.isLiked || false);
        setIsSaved(coreData.isSaved || false);
      } catch (error) {
        console.error('Error fetching core data:', error);
      }
    };

    fetchCore();
  }, [id]);

  const handleLike = async () => {
    try {
      await axios.post(`${apiUrl}/core/${id}/likes`);
      setIsLiked(true);
    } catch (error) {
      console.error('Error liking core:', error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post(`${apiUrl}/core/${id}/saves`);
      setIsSaved(true);
    } catch (error) {
      console.error('Error saving core:', error);
    }
  };
  
  const handleFlag = async () => {
    try {
      await axios.post(`${apiUrl}/core/${id}/flags`, { flaggedByAdmin: isAdmin });
      alert('Core has been flagged.');
    } catch (error) {
      console.error('Error flagging core:', error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/core/${id}/comments`, { text: newComment });
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return core ? (
    <Container>
      <Row>
        <Col md={8}>
          <Card className="rounded shadow-sm">
            <Card.Img variant="top" src={core.media_url} />
            <Card.Body>
              <Card.Title>{core.title}</Card.Title>
              <Card.Text>{core.description}</Card.Text>
              {core.hashtag && <Card.Text className="text-muted">#{core.hashtag}</Card.Text>}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Button 
            variant={isLiked ? "danger" : "outline-danger"} 
            onClick={handleLike}
            className="mb-2"
          >
            ♥ {isLiked ? 'Liked' : 'Like'}
          </Button>
          <Button 
            variant={isSaved ? "success" : "outline-success"} 
            onClick={handleSave}
            className="mb-2"
          >
            {isSaved ? 'Saved' : 'Save'}
          </Button>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="mb-2">
              ⋮
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleFlag}>Flag</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {core.user && (
            <Card className="mt-4">
              <Card.Body className="d-flex align-items-center">
                <img src={core.user.profileImageUrl} alt={core.user.name} className="rounded-circle mr-3" width="50" />
                <div>
                  <Card.Title>{core.user.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{core.user.followers} followers</Card.Subtitle>
                </div>
                <Button variant="outline-primary" className="ml-auto">Follow</Button>
              </Card.Body>
            </Card>
          )}
          <Form onSubmit={handleCommentSubmit} className="mt-4">
            <Form.Group controlId="comment">
              <Form.Label>Leave a Comment</Form.Label>
              <Form.Control 
                type="text" 
                value={newComment} 
                onChange={(e) => setNewComment(e.target.value)} 
                placeholder="Write a comment..."
              />
            </Form.Group>
            <Button type="submit" variant="primary">Post Comment</Button>
          </Form>
          <div className="mt-4">
            <h5>Comments</h5>
            {comments && comments.map((comment, index) => (
              <Card key={index} className="mb-2">
                <Card.Body>{comment.text}</Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <p>Loading...</p>
  );
};

export default CorePage;
