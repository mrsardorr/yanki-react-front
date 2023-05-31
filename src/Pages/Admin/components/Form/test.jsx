import React, { useState, useEffect } from "react";
import { Button, Rating, TextField } from "@mui/material";
import "./Form.scss";
import axios from "axios";

const Form = ({ setProducts, setCurrentId, currentId, products }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [img, setImg] = useState("");

  useEffect(() => {
    if (currentId) {
      const currentProduct = products.find(
        (product) => product._id === currentId
      );

      setName(currentProduct.name);
      setDescription(currentProduct.description);
      setPrice(currentProduct.price);
      setRating(currentProduct.rating);
    }
  }, [currentId, products]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const product = new FormData()

    product.append('name', name)
    product.append('description', description)
    product.append('price', price)
    product.append('rating', rating)
    product.append('img', img)

    try {
      if (currentId) {
        const {
          data: { data },
        } = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/api/products/${currentId}`,
          product,
        );

        const filteredProducts = products.map((product) =>
          product._id === data._id ? data : product
        );
        setProducts([...filteredProducts]);
      } else {
        const {
          data: { data },
        } = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/products`,
          product,
        );

        setProducts((prevData) => [...prevData, data]);
      }

      clear();
    } catch (err) {
      console.log(err.message);
    }
  };

  const clear = () => {
    setName("");
    setDescription("");
    setPrice("");
    setRating(0);
    setCurrentId("");
  };

  return (
    <div className="form-controller">
      <h2>Product form</h2>
      <form onSubmit={onSubmitHandler}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={{ marginBottom: 15 }}
          label="Name"
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          style={{ marginBottom: 15 }}
          label="Description"
        />
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          style={{ marginBottom: 15 }}
          label="Price"
          type="number"
        />
        <Rating
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          style={{ marginBottom: 15 }}
          name="read-only"
          sx={{
            span: {
              width: 25,
            },
          }}
          precision={0.5}
        />
        <TextField
          onChange={(e) => setImg(e.target.files[0])}
          value={img?.filename}
          style={{ marginBottom: 15 }}
          label="Image"
          type="file"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
