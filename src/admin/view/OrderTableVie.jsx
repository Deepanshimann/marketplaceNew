import {
  Avatar, AvatarGroup,
  Box, Button,Card,CardHeader,
  Chip,FormControl,
  InputLabel,Menu,
  MenuItem,Pagination,
  Table, TableBody,TableCell,
  TableContainer,TableHead,
  TableRow,Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Grid, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/AdminOrder/Action";

const OrderTable = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ status: "", sort: "" });
  const [orderStatus, setOrderStatus] = useState("");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { adminOrder } = useSelector((store) => store);
  const [anchorElArray, setAnchorElArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  useEffect(() => {
    dispatch(getOrders({ jwt }));
  }, [jwt, adminOrder.delivered, adminOrder.shipped, adminOrder.confirmed, adminOrder.deletedOrder]);

  const handlePaginationChange = (event, value) => {
      setCurrentPage(value);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  };

  const handleUpdateStatusMenuClick = (event, index) => {
      const newAnchorElArray = [...anchorElArray];
      newAnchorElArray[index] = event.currentTarget;
      setAnchorElArray(newAnchorElArray);
  };

  const handleUpdateStatusMenuClose = (index) => {
      const newAnchorElArray = [...anchorElArray];
      newAnchorElArray[index] = null;
      setAnchorElArray(newAnchorElArray);
  };

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData({ ...formData, [name]: value });
  };

  const handleConfirmedOrder = (orderId, index) => {
      console.log("Confirming order:", orderId);
      handleUpdateStatusMenuClose(index);
      dispatch(confirmOrder(orderId))
          .then(() => console.log("Order confirmed:", orderId))
          .catch(err => console.error("Error confirming order:", err));
      setOrderStatus("CONFIRMED");
  };
  
  const handleShippedOrder = (orderId, index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(shipOrder(orderId))
      setOrderStatus("SHIPPED")
  };

  const handleDeliveredOrder = (orderId, index) => {
      handleUpdateStatusMenuClose(index);
      dispatch(deliveredOrder(orderId))
      setOrderStatus("DELIVERED")
  };

  const handleDeleteOrder = (orderId) => {
      handleUpdateStatusMenuClose();
      dispatch(deleteOrder(orderId));
  };

  // Calculate orders to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const ordersToDisplay = adminOrder?.orders?.slice(startIndex, endIndex);

  return (
      <Box>
          <Card className="p-3">
              <CardHeader
                  title="Sort"
                  sx={{
                      pt: 0,
                      alignItems: "center",
                      "& .MuiCardHeader-action": { mt: 0.6 },
                  }}
              />
              <Grid container spacing={2}>
                  <Grid item xs={4}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Status</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={formData.status}
                              label="Status"
                              onChange={handleChange}
                          >
                              <MenuItem value={"PLACED"}>PLACED</MenuItem>
                              <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                              <MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
                              <MenuItem value={"CANCELD"}>CANCLED</MenuItem>
                          </Select>
                      </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                      <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                          <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={formData.sort}
                              label="Sort By"
                              onChange={handleChange}
                          >
                              <MenuItem value={"Newest"}>Newest</MenuItem>
                              <MenuItem value={"Older"}>Older</MenuItem>
                          </Select>
                      </FormControl>
                  </Grid>
              </Grid>
          </Card>
          <Card className="mt-2">
              <CardHeader
                  title="All Orders"
                  sx={{
                      pt: 2,
                      alignItems: "center",
                      "& .MuiCardHeader-action": { mt: 0.6 },
                  }}
              />
              <TableContainer>
                  <Table sx={{ minWidth: 800 }} aria-label="table in dashboard">
                      <TableHead>
                          <TableRow>
                              <TableCell>Image</TableCell>
                              <TableCell>Title</TableCell>
                              <TableCell>Price</TableCell>
                              <TableCell>Id</TableCell>
                              <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {ordersToDisplay?.map((item, index) => (
                              <TableRow
                                  hover
                                  key={item.name}
                                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                              >
                                  <TableCell sx={{}}>
                                      <AvatarGroup max={4} sx={{ justifyContent: 'start' }}>
                                          {item.orderItems.map((orderItem) => (
                                              <Avatar alt={item.title} src={orderItem.product?.imageUrl} />
                                          ))}
                                      </AvatarGroup>
                                  </TableCell>
                                  <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                                              {item?.orderItems.map((order) => (
                                                  <span className=""> {order.product?.title},</span>
                                              ))}
                                          </Typography>
                                          <Typography variant="caption">
                                              {item?.orderItems.map((order) => (
                                                  <span className="opacity-60"> {order.product?.brand},</span>
                                              ))}
                                          </Typography>
                                      </Box>
                                  </TableCell>
                                  <TableCell>{item?.totalPrice}</TableCell>
                                  <TableCell>{item?._id}</TableCell>
                                  <TableCell className="text-white">
                                      <Chip
                                          sx={{
                                              color: "white !important",
                                              fontWeight: "bold",
                                              textAlign: "center",
                                          }}
                                          label={item?.orderStatus}
                                          size="small"
                                          color={
                                              item.orderStatus === "PENDING" ? "info" : item?.orderStatus === "DELIVERED" ? "success" : "secondary"
                                          }
                                          className="text-white"
                                      />
                                  </TableCell>
                                  
                                  <TableCell sx={{ textAlign: "center" }} className="text-white">
                                  </TableCell>
                              </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </Card>
          <Card className="mt-2 felx justify-center items-center">
              <Pagination
                  className="py-5 w-auto"
                  size="large"
                  count={Math.ceil(adminOrder.orders.length / itemsPerPage)}
                  page={currentPage}
                  color="primary"
                  onChange={handlePaginationChange}
              />
          </Card>
      </Box>
  );
};

export default OrderTable;
