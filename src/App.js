import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import Contact from './Component/Contact';
import SingleProduct from './Component/SingleProduct';
import Cart from './Component/Cart';
import NotFound from './Component/NotFound';

function App() {
  return (
    <div className="App">
     <h1>React E-Commerce Website</h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
      <Route path='cart' element={<Cart/>} />
      <Route path='*' element={<NotFound/>} />



     </Routes>
     </BrowserRouter>


    </div>
  );
}

export default App;
