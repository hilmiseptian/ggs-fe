import React from 'react';
import { Outlet } from 'react-router';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import Login from './views/Login';
import User from './views/User';
import UserRegister from './views/User/UserRegister';
import UserLogin from './views/User/UserLogin';
import './index.css';
import BaseLayout from './views/layouts/BaseLayout';
import Home from './views/pages/Home';
import Product from './views/pages/Product';
import ProductCreate from './views/pages/ProductCreate';
import ProductEdit from './views/pages/ProductEdit';
import ProductView from './views/pages/ProductView';
import UserLogout from './views/User/UserLogout';
import { AuthProvider } from './lib/context/AuthContext';
function App() {
  return (
    // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Product />} />
              <Route path="create" element={<ProductCreate />} />
              <Route path=":id/edit" element={<ProductEdit />} />
              <Route path=":id" element={<ProductView />} />
            </Route>
            <Route path="login" element={<UserLogin />} />
            <Route path="logout" element={<UserLogout />} />
            <Route path="register" element={<UserRegister />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    // </React.StrictMode>
  );
}
export default App;
