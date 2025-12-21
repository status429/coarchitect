import '@mantine/core/styles.css';
import { Routes, Route, Link } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Button } from '@mantine/core';
export function App() {
  return (
    <>
      <Link to="/"><Button>Home</Button></Link>
      <Link to="/about"><Button>About</Button></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
