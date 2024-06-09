import React from "react";
import { Table } from "react-bootstrap";
import "./stockTab.css";
import Navbar from "../Dashboard/navBar";

const StockTable = () => {
  const stockData = [
    { id: 1, nama: "barang A", jumlah: "25", harga: 10000 },
    { id: 2, nama: "barang b", jumlah: "62", harga: 16000 },
    { id: 3, nama: "barang c", jumlah: "17", harga: 19500 },
    { id: 4, nama: "barang d", jumlah: "72", harga: 34500 },
    { id: 5, nama: "barang e", jumlah: "16", harga: 15500 },
    { id: 6, nama: "barang f", jumlah: "78", harga: 49500 },
    { id: 7, nama: "barang g", jumlah: "9", harga: 29500 },
    { id: 8, nama: "barang h", jumlah: "7", harga: 195000 },
    { id: 9, nama: "barang i", jumlah: "3", harga: 120000 },
    { id: 10, nama: "barang ", jumlah: "9", harga: 19000 },
  ];
  return (
    <div className="container-fluid">
      <Navbar />

      <Table striped border hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.jumlah}</td>
              <td>{item.harga}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default StockTable;
