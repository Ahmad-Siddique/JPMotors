import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import Login from "../pages/login";
import Article from "../pages/Article";
import Customer from "../pages/Customer";
import AddClient from "../pages/AddClient";
import Suppliers from "../pages/Suppliers";
import TaxDeduction from "../pages/Tax-deduction";
import Salary from "../pages/Salary";
import AddArticle from "../components/article/AddArticle";
import ArticleWholeSale from "../pages/ArticleWholeSale";
import ProductSalePrice from "../pages/ProductSalePriceByClient";
import BOM from "../pages/BOM";
import AskProductPrice from "../pages/AskProductPrice";





const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/product-list"
        element={
          <PrivateRoute>
            <ProductList />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/articles"
        element={
          <PrivateRoute>
            <Article />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/articles/add"
        element={
          <PrivateRoute>
            <AddArticle />
          </PrivateRoute>
        }
      />

      <Route
        path="/file/articles-wholesale"
        element={
          <PrivateRoute>
            <ArticleWholeSale />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/articleswholesale/add"
        element={
          <PrivateRoute>
            <AddArticle />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/customer"
        element={
          <PrivateRoute>
            <Customer />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/customer/AddClient"
        element={
          <PrivateRoute>
            <AddClient />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/suppliers"
        element={
          <PrivateRoute>
            <Suppliers />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/tax-deduction"
        element={
          <PrivateRoute>
            <TaxDeduction />
          </PrivateRoute>
        }
      />
      <Route
        path="/file/salary"
        element={
          <PrivateRoute>
            <Salary />
          </PrivateRoute>
        }
      />

      <Route
        path="/file/product-sale-price"
        element={
          <PrivateRoute>
            <ProductSalePrice />
          </PrivateRoute>
        }
      />

      <Route
        path="/file/bom"
        element={
          <PrivateRoute>
            <BOM />
          </PrivateRoute>
        }
      />

      <Route
        path="/file/ask-product-price"
        element={
          <PrivateRoute>
            <AskProductPrice />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
