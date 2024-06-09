import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "./navBar";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid>
      <Navbar />
      <h1 className="mt-4">GUDANG</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">GUDANG</li>
      </ol>
      <Row>
        <Col xl={3} md={6}>
          <Button
            as={Link}
            to="/datastock"
            className="bg-danger text-white mb-4 w-100"
            size="lg"
          >
            DATA STOCK
          </Button>
        </Col>
        <Col xl={3} md={6}>
          <Button
            as={Link}
            to="/inputpenerimaan"
            className="bg-primary text-white mb-4 w-100"
            size="lg"
          >
            INPUT PENERIMAAN BARANG
          </Button>
        </Col>
        <Col xl={3} md={6}>
          <Button
            as={Link}
            to="/inputpengeluaran"
            className="bg-primary text-white mb-4 w-100"
            size="lg"
          >
            INPUT PENGELUARAN BARANG
          </Button>
        </Col>
        <Col xl={3} md={6}>
          <Button
            as={Link}
            to="/inputprodukbaru"
            className="bg-primary text-white mb-4 w-100"
            size="lg"
          >
            INPUT PRODUK BARU
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
