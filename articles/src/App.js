import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ articles, addArticle }) {
  return (
    <Container>
      <h2 className="text-center my-4">Latest Articles</h2>
      <Row>
        {articles.map((article, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <Card style={{ margin: '10px' }}>
              <Card.Img variant="top" src={article.imageUrl}
                style={{
                  width: 'auto',
                  height: '287px'
                }} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By {article.author}</Card.Subtitle>
                <Card.Text>
                  {article.description}
                </Card.Text>
                {/* <Button variant="primary" href={article.link} target="_blank">Read More</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      <Button className='mt-4 mb-4' onClick={() => addArticle({
        title: 'Vue JS',
        author: 'Lakhan',
        description: 'Learn the basics of Vue JS in this detailed guide',
        imageUrl: 'https://banner2.cleanpng.com/20180620/upc/aa6a66zuo.webp',
        link: 'https://example.com/article3',
      })}>Add Article</Button>
      </Row>

    </Container>
  );
}

export default App;
