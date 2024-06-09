/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import InputForm from "./inputForm";
import List from "./list";
import Navbar from "../Dashboard/navBar";

const inputPenerimaan = () => {
  const [goods, setGoods] = useState([]);
  const addGoods = (newGoods) => {
    setGoods([...goods, newGoods]);
  };

  const deleteGoods = (index) => {
    const newGoodsList = goods.filter((_, i) => i !== index);
    setGoods(newGoodsList);
  };
  return (
    <div className="container-fluid">
      <div>
        <Navbar />

        <h1>Input Penerimaan Barang</h1>
        <InputForm addGoods={addGoods} />
        <List goods={goods} deleteGoods={deleteGoods} />
      </div>
    </div>
  );
};

export default inputPenerimaan;
