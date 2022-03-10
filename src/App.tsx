import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminHome } from './admin/AdminHome';
import { AdminProducts } from './admin/pages/AdminProducts';
import { AdminProductsEdit } from './admin/pages/AdminProductsEdit';
import { AdminProductsNew } from './admin/pages/AdminProductsNew';
import { AdminCategories } from './admin/pages/category/AdminCategories';
import { CartProvider } from './public/contexts/CartContext';
import { ShoppingCartProvider } from './public/contexts/ShoppingCartContext';
import { Page404 } from './public/pages/404';
import { Login } from './public/pages/auth/Login';
import { Cart } from './public/pages/cart/Cart';
import { Checkout } from './public/pages/cart/Checkout';

import { Home } from './public/pages/Home';
import { Product } from './public/pages/ProductSingle';

function App() {
  
  return (
    
    <Router>
      <ShoppingCartProvider>
        <Routes>
          <Route path='*' element={<Page404 />} />
          <Route path='/' element={<Home />} />
          <Route path='/product/:productName' element={<Product />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/cart/' element={<Cart />} />
          <Route path='/cart/checkout' element={<Checkout />} />

          <Route path='/admin' element={<AdminHome />} />
          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path='/admin/products/edit/:productName' element={<AdminProductsEdit />} />
          <Route path='/admin/products/new' element={<AdminProductsNew />} />

          <Route path='/admin/categories' element={<AdminCategories />} />
        </Routes>
      </ShoppingCartProvider>
    </Router>
    
    //== USAR ESTA PARTE PARA DEPLOY EM SERVIDOR APACHE!! == 
      /* <Router basename='/ecommerce'>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/cart/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </Router> */
     
  );
}

export default App;
