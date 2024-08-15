import { useState } from "react";
import { Typography, Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Fragment } from "react";
import "./createProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../State/CustomerProduct/Action";
import { useNavigate } from "react-router-dom";

// Categories data
const categories = {
  Clothing: ["Men", "Women", "Kids"],
  "Printed Media": ["Fiction", "Biographies", "Spiritual", "Story Collections"],
  Electronics: ["Entertainment", "Computing", "Personal Gadgets", "Mobile Devices"],
  Furniture: ["Living Room", "Bedroom", "Dining Room", "Office"],
};

const initialSizes = [
  { name: "XS", quantity: 0 },
  { name: "S", quantity: 0 },
  { name: "M", quantity: 0 },
  { name: "L", quantity: 0 },
  { name: "XL", quantity: 0 },
  { name: "2XL", quantity: 0 },
];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    brand: "",
    title: "",
    description: "",
    color: "",
    discountedPrice: "",
    price: "",
    discountPersent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    height: "",
    length: "",
    width: "",
  });

  const [secondLevelOptions, setSecondLevelOptions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "topLevelCategory") {
      setSecondLevelOptions(categories[value] || []);
      setProductData((prevState) => ({
        ...prevState,
        secondLevelCategory: "", // Reset second-level category when top-level changes
      }));
    }
  };

  const handleSizeChange = (e, index) => {
    let { name, value } = e.target;
    name === "size_quantity" ? (name = "quantity") : (name = e.target.name);

    const sizes = [...productData.size];
    sizes[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      size: sizes,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(productData))
      .then(() => {
        console.log("Product created successfully.");
        navigate("/admin/products"); // Redirect to the products section after successful creation
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };

  return (
    <Fragment>
      <Typography variant="h3" sx={{ textAlign: "center" }} className="py-10 text-center">
        Add New Product
      </Typography>
      <form onSubmit={handleSubmit} className="createProductContainer min-h-screen">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={productData.imageUrl}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPersent"
              value={productData.discountPersent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Top Level Category"
              >
                {Object.keys(categories).map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Second Level Category</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Second Level Category"
                disabled={!secondLevelOptions.length} // Disable if no options available
              >
                {secondLevelOptions.map((subcategory) => (
                  <MenuItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>

          {productData.topLevelCategory === "Clothing" && (
            productData.size.map((size, index) => (
              <Grid container item spacing={3} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Size Name"
                    name="name"
                    value={size.name}
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Quantity"
                    name="size_quantity"
                    type="number"
                    onChange={(event) => handleSizeChange(event, index)}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))
          )}

          {productData.topLevelCategory === "Furniture" && (
            <>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Height in feet"
                  name="height"
                  value={productData.height}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Length in feet"
                  name="length"
                  value={productData.length}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Width in feet"
                  name="width"
                  value={productData.width}
                  onChange={handleChange}
                  required
                  fullWidth
                  type="number"
                />
              </Grid>
            </>
          )}

          <Grid item xs={12}>
            <Button variant="contained" sx={{ p: 1.8 }} className="py-20" size="large" type="submit">
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
