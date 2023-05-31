import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import "./Main.scss";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [currentId, setCurrentId] = useState("");


  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {
          data: { data },
        } = await axios.get("http://localhost:3000/api/products");
        setProducts([...data]);
        console.log(data);
      } catch (err) {}
    };
    fetchApi();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="controller-title">Controller for products</h2>
        <div className="controller-main" style={{marginBottom:100}}>
          <Form
            setProducts={setProducts}
            products={products}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
          <List
            setProducts={setProducts}
            products={products}
            setCurrentId={setCurrentId}
          />
        </div>
        
      </div>
    </>
  );
};

export default Main;
