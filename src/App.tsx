import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <Container>
      <Routes>
        <Route path='/'></Route>
        <Route path='/store'></Route>
        <Route path='/about'></Route>
      </Routes>
    </Container>
  );
}

export default App;
