import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import "./List.scss";
import { Button } from "@mui/material";

const List = ({ products, setProducts, setCurrentId }) => {
  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );

      if (data.success) {
        let filteredProducts = products.filter((product) => product._id !== id);
        setProducts([...filteredProducts]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="controller-list">
      <h2>Product list</h2>
      <ol>
        {products.map((product, index) => (
          <li key={index}>
            <span>{index + 1}.</span>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
            <div className="buttons">
              <Button onClick={() => deleteHandler(product._id)}>
                <RiDeleteBin2Line />
              </Button>
              <Button onClick={() => setCurrentId(product._id)}>
                <RiEdit2Line />
              </Button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default List;
