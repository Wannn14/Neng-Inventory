import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import DataStock from "./pages/Data Stock/StockTable";
import InputPenerimaan from "./pages/inputPenerimaan/inputPenerimaan";
import InputPengeluaran from "./pages/inputPegeluaran/inputPengeluaran";
import InputProdukBaru from "./pages/inputProdukbaru/inputProdukbaru";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/datastock" element={<DataStock />} />
          <Route path="/inputpenerimaan" element={<InputPenerimaan />} />
          <Route path="/inputpengeluaran" element={<InputPengeluaran />} />
          <Route path="/inputprodukbaru" element={<InputProdukBaru />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
