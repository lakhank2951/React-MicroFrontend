import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPlayCircle } from 'react-icons/fa';

function App({ videos, addVideo }) {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  const handlePlayClick = (videoId) => {
    setPlayingVideoId(videoId);
  };

  return (
    <Container>
      <h2 className='mt-4 text-center'>Free Tutorials</h2>
      <Row className="align-items-center">
        {videos && videos.map((el) => (
          <Col className='mt-4' md={4} key={el.videoId}>
            <Card style={{ position: 'relative' }}>
              {playingVideoId === el.videoId ? (
                // Embed YouTube video when the play button is clicked
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${el.videoId}?autoplay=1`}
                    title={el.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // Display YouTube thumbnail with play button overlay initially
                <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => handlePlayClick(el.videoId)}>
                  <Card.Img
                    src={`https://img.youtube.com/vi/${el.videoId}/maxresdefault.jpg`}
                    alt="Video Thumbnail"
                  />
                  <FaPlayCircle
                    size={60}
                    color="white"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: 0.8
                    }}
                  />
                </div>
              )}
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

          <Button className='mt-4 mb-4' onClick={() => addVideo({
            videoId: 'YrxBCBibVo0',
            author: 'Net Ninja',
            title: 'Vue JS '
          })}>Add Video</Button>
      </Row>
    </Container>
  );
}

export default App;
