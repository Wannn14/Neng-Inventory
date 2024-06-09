import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h5 className="text-uppercase">Menu</h5>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/gudang" className="text-white">
          <i className="fas fa-warehouse"></i> Gudang
        </Nav.Link>
        <Nav.Link as={Link} to="/purchasing" className="text-white">
          <i className="fas fa-shopping-cart"></i> Purchasing
        </Nav.Link>
        <Nav.Link as={Link} to="/produksi" className="text-white">
          <i className="fas fa-industry"></i> Produksi
        </Nav.Link>
        <Nav.Link as={Link} to="/barangjadi" className="text-white">
          <i className="fas fa-boxes"></i> Barangjadi
        </Nav.Link>
      </Nav>
    </nav>
  );
};

export default Sidebar;
