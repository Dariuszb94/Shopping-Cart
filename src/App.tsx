import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/store'></Route>
        <Route path='/about'></Route>
      </Routes>
    </Container>
  );
}

export default App;
