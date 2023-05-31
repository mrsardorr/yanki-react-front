import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";


const Size = () => {
    const [size, setSize] = useState("");
    const razmerHandle = (e) => {
      setSize(e.target.value);
    };
  return (
    <div className="razmer">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Age"
                    onChange={razmerHandle}
                  >
                    <MenuItem value={"XXS"}>XXS</MenuItem>
                    <MenuItem value={"XS"}>XS</MenuItem>
                    <MenuItem value={"S"}>S</MenuItem>
                    <MenuItem value={"M"}>M</MenuItem>
                    <MenuItem value={"L"}>L</MenuItem>
                  </Select>
                </FormControl>
              </div>
  )
}

export default Size