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
  "Treasure-for-Little-ones": ["all"], 
  Jewels: ["gems"], 
  "Decorative Touches": ["Wall Art"], 
  "Gifts": ["for-them"], 
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
    discountPercent: "",
    size: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    height: "",
    length: "",
    width: "",
    unit: "feet", 
    ringSize: "",
  });

  const [secondLevelOptions, setSecondLevelOptions] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedProductData = {
      ...productData,
      [name]: value,
    };

    if (name === "price" || name === "discountedPrice") {
      const price = name === "price" ? parseFloat(value) : parseFloat(productData.price);
      const discountedPrice = name === "discountedPrice" ? parseFloat(value) : parseFloat(productData.discountedPrice);

      if (!isNaN(price) && !isNaN(discountedPrice) && price > 0) {
        const discountPercent = ((price - discountedPrice) / price) * 100;
        updatedProductData.discountPercent = discountPercent.toFixed(2); // Calculate discount percent
      } else {
        updatedProductData.discountPercent = ""; // Reset if values are not valid
      }
    }

    setProductData(updatedProductData);

    if (name === "topLevelCategory") {
      setSecondLevelOptions(categories[value] || []);
      setProductData((prevState) => ({
        ...prevState,
        secondLevelCategory: "",
      }));
    }
  };

  const handleSizeChange = (e, index) => {
    const { name, value } = e.target;
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
        navigate("/admin/products"); 
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
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              multiline
              rows={3}
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
              name="discountPercent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
              disabled 
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
                disabled={!secondLevelOptions.length}
              >
                {secondLevelOptions.map((subcategory) => (
                  <MenuItem key={subcategory} value={subcategory}>
                    {subcategory}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Size inputs for Clothing */}
          {productData.topLevelCategory === "Clothing" && (
            <Grid item xs={12}>
              <Typography variant="h6">Sizes</Typography>
              <Grid container spacing={2}>
                {productData.size.map((size, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <TextField
                      fullWidth
                      label={`${size.name} Quantity`}
                      name="quantity"
                      value={size.quantity}
                      onChange={(e) => handleSizeChange(e, index)}
                      type="number"
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}

          {/* Size inputs for Decorative Touches, Jewels, Gifts, and Furniture */}
          {(productData.topLevelCategory === "Decorative Touches" ||
            productData.topLevelCategory === "Gifts" ||
            productData.topLevelCategory === "Furniture" || 
            productData.secondLevelCategory === "Necklaces" ||
            productData.secondLevelCategory === "Bracelets") && (
            <>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Length"
                  name="length"
                  value={productData.length}
                  onChange={handleChange}
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Width"
                  name="width"
                  value={productData.width}
                  onChange={handleChange}
                  fullWidth
                  type="number"
                />
              </Grid>
              {(productData.topLevelCategory === "Decorative Touches" ||
                productData.topLevelCategory === "Furniture") && (
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Height"
                    name="height"
                    value={productData.height}
                    onChange={handleChange}
                    fullWidth
                    type="number"
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Unit</InputLabel>
                  <Select
                    name="unit"
                    value={productData.unit}
                    onChange={handleChange}
                    label="Unit"
                  >
                    <MenuItem value="feet">Feet</MenuItem>
                    <MenuItem value="inches">Inches</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </>
          )}

          {/* Size input for Rings */}
          {productData.secondLevelCategory === "Rings" && (
            <Grid item xs={12} sm={4}>
              <TextField
                label="Ring Size"
                name="ringSize"
                value={productData.ringSize}
                onChange={handleChange}
                fullWidth
                type="number"
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              variant="contained"
              className="py-20"
              size="large"
              type="submit"
              sx={{
                px: "2rem",
                color: "black",
                fontWeight: "bold",
                py: ".6rem",
                mt: "2rem",
                fontSize: "1.2rem",
                bgcolor: "#2DD4BF",
                borderRadius: "9999px", 
                '&:hover': {
                  bgcolor: "#22B8A1", 
                },
              }}
            >
              Add New Product
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
