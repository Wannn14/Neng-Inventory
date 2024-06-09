// src/components/GoodsForm.js

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const GoodsForm = ({ addGoods }) => {
  const [noDO, setNoDO] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [goodsName, setGoodsName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoods({ noDO, supplierName, goodsName, quantity, date });
    setNoDO("");
    setSupplierName("");
    setGoodsName("");
    setQuantity("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>No DO</Form.Label>
        <Form.Control
          type="text"
          value={noDO}
          onChange={(e) => setNoDO(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nama Supplier</Form.Label>
        <Form.Control
          type="text"
          value={supplierName}
          onChange={(e) => setSupplierName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nama Barang</Form.Label>
        <Form.Control
          type="text"
          value={goodsName}
          onChange={(e) => setGoodsName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Qty Barang</Form.Label>
        <Form.Control
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tanggal</Form.Label>
        <Form.Control
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Tambah Barang
      </Button>
    </Form>
  );
};

export default GoodsForm;
