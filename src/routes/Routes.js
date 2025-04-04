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
    </Routes>
  );
};

export default AppRoutes;
