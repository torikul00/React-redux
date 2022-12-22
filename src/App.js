
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/pages/About/About';
import Cart from './components/pages/Cart/Cart';
import Home from './components/pages/Home/Home';
import Toprated from './components/pages/Toprated/Toprated';
import Navbar from './components/shared/Navbar';
import { Provider } from 'react-redux'
import store from './components/redux/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/toprated' element={<Toprated />} />

        </Routes>
      </Provider>
    </>
  );
}

export default App;
