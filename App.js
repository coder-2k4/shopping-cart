import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  return (
    // eslint-disable-next-line
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
