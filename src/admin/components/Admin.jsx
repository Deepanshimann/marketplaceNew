import * as React from "react";
import { Box, Avatar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import Dashboard from "./Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateProductForm from "./createproduct/CreateProductForm";
import ProductsTable from "./products/ProductTable";
import OrdersTable from "./ordersTable/OrderTable";
import Customers from "./customers/CustomerTable";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../State/Auth/Action";
import { useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import AdminNav from "./AdminNav/AdminNav";

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/products" },
  { name: "Customers", path: "/admin/customers" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Total Earnings", path: "/admin" },
  { name: "Weekly Overview", path: "/admin" },
  { name: "Monthly Overview", path: "/admin" },
  { name: "Add Product", path: "/admin/product/create" },
];

export default function Admin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);  // Sidebar visibility controlled here
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        <ListItem onClick={handleLogout} disablePadding>
          <ListItemButton>
            <Avatar
              className="text-white"
              onClick={handleLogout}
              sx={{
                bgcolor: deepPurple[500],
                color: "white",
                cursor: "pointer",
              }}
            >
              {auth.user?.firstName[0].toUpperCase()}
            </Avatar>
            <ListItemText className="ml-5" primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleSideBarToggle = () => {
    setSideBarVisible(!sideBarVisible);  // Toggle sidebar visibility
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
      <CssBaseline />
      <AdminNav onToggleSidebar={handleSideBarToggle} />  {/* Pass the toggle function as a prop */}
      <Drawer
        variant={drawerVariant}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            ...(drawerVariant === "temporary" && {
              top: 0,
              [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]: {
                position: "fixed",
                left: 0,
                right: 0,
                height: "100%",
                zIndex: (theme) => theme.zIndex.drawer + 2,
              },
            }),
          },
        }}
        open={isLargeScreen || sideBarVisible}  // Sidebar only opens when the state is true
        onClose={() => setSideBarVisible(false)}  // Close sidebar on outside click
      >
        {drawer}
      </Drawer>
      <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Dashboard className="p-32"/>} />
          <Route path="/product/create" element={<CreateProductForm />} />
          <Route path="/products" element={<ProductsTable />} />
          <Route path="/orders" element={<OrdersTable />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </Box>
    </Box>
  );
}
