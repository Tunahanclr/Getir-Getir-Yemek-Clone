import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Getiryemekhero from './pages/Getiryemekhero';
import Hero from './components/Hero';
import Product from './components/Product';

function App() {
  return (
    <div >
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Layout/>}>
            <Route index={true} element={<Hero/>} />
            <Route path='getiryemek' element={<Getiryemekhero/>} />
            <Route path='layout' element={<Layout/>} />
            </Route>
           
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
