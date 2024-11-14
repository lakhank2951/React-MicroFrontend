import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Articles from 'ArticlePage/Articles';
import Courses from 'CoursePage/Courses';
import { useState } from 'react';

function App() {
  const [videos, setVideos] = useState([
    {
      videoId: 'SqcY0GlETPk',
      author: 'Mosh Hamedani',
      title: 'React Tutorial for Beginners'
    },
    {
      videoId: 'x0uinJvhNxI',
      author: 'Maximilian Schwarzmüller',
      title: 'Flutter Crash Course'
    },
    {
      videoId: '3c-iBn73dDE',
      author: 'TechWorld with Nana',
      title: 'Docker '
    }
  ]);

  const [articles, setArticles] = useState([
    {
      title: 'React Hooks Explained',
      author: 'John Doe',
      description: 'Learn the basics of React hooks in this detailed guide.',
      imageUrl: 'https://banner2.cleanpng.com/20180719/wrp/7fc7458875537a8282628c211d9c3f4f.webp',
      link: 'https://example.com/article1',
    },
    {
      title: 'JavaScript ES6 Features',
      author: 'Jane Smith',
      description: 'A comprehensive overview of ES6 features and their usage.',
      imageUrl: 'https://banner2.cleanpng.com/20190129/vxi/kisspng-javascript-web-applications-scalable-vector-graphi-1713908481051.webp',
      link: 'https://example.com/article2',
    },
    {
      title: 'Understanding CSS Grid',
      author: 'Mark Johnson',
      description: 'An introduction to CSS Grid layout and how to use it in web design.',
      imageUrl: 'https://banner2.cleanpng.com/20180421/vdq/avee3ca8b.webp',
      link: 'https://example.com/article3',
    }
  ]);

  const addVideo = (video) => {
    setVideos((prevState) => [...prevState, video])
  }

  const addArticle = (article) => {
    setArticles(prevArticle => [...prevArticle, article])
  } 

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/">Articles</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
          </Nav>
        </Navbar>

        <Routes>
          <Route path="/" element={<Articles articles={articles} addArticle={addArticle}/>} />
          <Route path="/courses" element={<Courses videos={videos} addVideo={addVideo}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
