import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from "./screens/Admin/Home";
import FarmerHomeScreen from "./screens/Farmer/FarmerHomeScreen";
import HarvestProductViewScreen from "./screens/Farmer/HarvestProductViewScreen";
import AdminHomeScreen from "./screens/Admin/AdminHomeScreen";
import SupplierHomeScreen from "./screens/Supplier/SupplierHomeScreen";
import TransportHomeScreen from "./screens/Transport/TransportHomeScreen";
import SellerHomeScreen from "./screens/Seller/SellerHomeScreen";
import SupplierProductViewScreen from "./screens/Supplier/SupplierProductViewScreen";
import TransportProductViewScreen from "./screens/Transport/TransportProductViewScreen";
import SellerProductViewScreen from "./screens/Seller/SellerProductViewScreen";
// import ThazzApp from "./screens/Thazz/ThazzApp"; // If needed

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#1976d2', 
    // },
    // secondary: {
    //   main: '#dc004e', 
    // },
    // error: {
    //   main: '#f44336', 
    // },
    // Add other colors as needed
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/farmer-home" element={<FarmerHomeScreen />} />
          <Route path="/harvest-product-view/:id" element={<HarvestProductViewScreen />} />
          <Route path="/supplier-product-view/:id" element={<SupplierProductViewScreen />} />
          <Route path="/transport-product-view/:id" element={<TransportProductViewScreen />} />
          <Route path="/seller-product-view/:id" element={<SellerProductViewScreen />} />

          <Route path="/admin-home" element={<AdminHomeScreen />} />
          <Route path="/supplier-home" element={<SupplierHomeScreen />} />
          <Route path="/transport-home" element={<TransportHomeScreen />} />
          <Route path="/seller-home" element={<SellerHomeScreen />} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
