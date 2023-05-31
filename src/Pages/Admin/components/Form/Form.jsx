import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, MenuItem, OutlinedInput, Rating, Select, TextField } from "@mui/material";
import "./Form.scss";
import axios from "../../../../api/axios";
import { useTheme } from "@emotion/react";




const Form = ({ setProducts, setCurrentId, currentId, products }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState('');
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const [category, setCategory] = useState([]);
  const [img, setImg] = useState('');

  useEffect(() => {
    if (currentId) {
      const currentProduct = products.find(
        (product) => product._id === currentId
      );

      setName(currentProduct.name);
      setDescription(currentProduct.description);
      setPrice(currentProduct.price);
      setRating(currentProduct.rating);
      setColor(currentProduct.color);
      
    }
  }, [currentId, products]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const product = new FormData()

    product.append('name', name)
    product.append('description', description)
    product.append('price', price)
    product.append('rating', rating)
    product.append('color', color)
    product.append('size', size)
    product.append('category', category)
    product.append('img', img)



    try {
      if (currentId) {
        const {
          data: { data },
        } = await axios.patch(
          `http://localhost:3000/api/products/${currentId}`,
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

    } 
    catch (err) {
      console.log(err);
    }
  };

  const clear = () => {
    setName("");
    setDescription("");
    setPrice("");
    setRating(0);
    setColor([]);
    setSize([]);
    setCategory([]);
    setCurrentId("");
  };

  // ============== select 
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  
  const colors = [
    'White',
    'Blue',
    'Yellow',
  ];
  const sizes = [
    'XXS',
    "XS",
    "S",
    "M",
    "L"
  ];
  const categories = [
        'New',
        'All',
        'Bestsellers',
        'Верхняя одежда',
        'Шубы',
        'Тренчи',
        'Пальто',
        'Пуховики и жилеты',
        'Костюмы',
        'Жакеты',
        'Платья',
        'Рубашки и блузы',
        'Юбки',
        'Футболки и топы',
        'Аксессуары',
        'Sale',
        'Summer',
  ];
  
  

  const theme = useTheme();
  
  const [categoryselc, setCategoryselc] = useState([]);



  const handleColorChange = (event,change) => {
    const {
      target: { value },
    } = event;
    setColor(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // setColor(value)
  };
  console.log(color)

  const handleSizeChange = (event) => {
    const {
      target: { value },
    } = event;
    setSize(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // setSize(value)
  };

  const handleCatChange = (event) => {
    const {
      target: { value },
    } = event;
    setCategoryselc(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    // setCategory(value)
  };
  
  
  // ============== select 
  console.log(rating)
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
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          style={{ marginBottom: 15 }}
          label="Price"
          type="number"
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          style={{ marginBottom: 15 }}
          label="Description"
          type="text"

        />

        <FormControl fullWidth style={{marginBottom:"20px"}}>
        <InputLabel id="demo-multiple-name-label">Categories</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={categoryselc}
          onChange={handleCatChange}
          input={<OutlinedInput label="Categories" />}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>

        <FormControl fullWidth style={{marginBottom:"20px"}}>
        <InputLabel id="demo-multiple-name-label">sizes</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={size}
          onChange={handleSizeChange}
          input={<OutlinedInput label="sizes" />}
          MenuProps={MenuProps}
        >
          {sizes.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>

        <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label">Colors</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={color}
          onChange={handleColorChange}
          input={<OutlinedInput label="Colors" />}
          MenuProps={MenuProps}
        >
          {colors.map((name) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        
        <Rating
          onChange={(e) => setRating(e.target.value)}
          
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
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
          value={img.filename}
          style={{ marginBottom: 15 }}
        />
        
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
