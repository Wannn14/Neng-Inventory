// src/components/GoodsList.js

import React from "react";
import { Table, Button } from "react-bootstrap";

const GoodsList = ({ goods, deleteGoods }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No DO</th>
          <th>Nama Supplier</th>
          <th>Nama Barang</th>
          <th>Qty Barang</th>
          <th>Tanggal</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {goods.map((item, index) => (
          <tr key={index}>
            <td>{item.noDO}</td>
            <td>{item.supplierName}</td>
            <td>{item.goodsName}</td>
            <td>{item.quantity}</td>
            <td>{item.date}</td>
            <td>
              <Button variant="danger" onClick={() => deleteGoods(index)}>
                Hapus
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default GoodsList;
