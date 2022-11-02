import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import RegisterPage from "./pages/RegisterPage";
import ProtectPage from "./Components/ProtectPage";
import { QueryClient, QueryClientProvider } from "react-query";
import CheckedOut from "./pages/CheckedOut";

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectPage />}>
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/" index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckedOut />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
