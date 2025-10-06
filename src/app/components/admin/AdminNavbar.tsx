"use client"
import React, { useState } from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { CategoryOutlined, KeyOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/navigation';
import axios from "axios";

const AdminNavbar = () => {
  const [data, setData] = useState("")


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const router = useRouter()

  const navigateTo = (url: string) => {
    toggleDrawer(false);
    router.push(url)
  }

  const logout = async () => {
    try {
      await axios.get('/api/auth/logout')
      alert('Logout successful')
      router.push('/auth/login')
    } catch (error: any) {
      console.log(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/auth/users')
    console.log(res.data);
    setData(res.data.data._id)
  }

  const DrawerList = (
    <Box sx={{ width: 250, paddingTop: 5 }} role="presentation" onClick={toggleDrawer(false)}>
      <ListSubheader sx={{ margin: 0 }}>Home</ListSubheader>
      <Divider />
      <List>
        <ListItem onClick={() => navigateTo("/")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"Home Page"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List></List>
      <ListSubheader sx={{ margin: 0 }}>Hero</ListSubheader>
      <Divider />
      <List>
        <ListItem onClick={() => navigateTo("/admin/hero")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"Add Hero"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem onClick={() => navigateTo("/admin/heros")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"List Hero"} />
          </ListItemButton>
        </ListItem>
      </List>
      <ListSubheader sx={{ margin: 0 }}>About Me</ListSubheader>
      <Divider />
      <List>
        <ListItem onClick={() => navigateTo("/admin/about")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"Add About Me"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem onClick={() => navigateTo("/admin/abouts")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"List About Me"} />
          </ListItemButton>
        </ListItem>
      </List>
      <ListSubheader sx={{ margin: 0 }}>Project</ListSubheader>
      <Divider />
      <List>
        <ListItem onClick={() => navigateTo("/admin/project")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"Add Project"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem onClick={() => navigateTo("/admin/projects")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"List Project"} />
          </ListItemButton>
        </ListItem>
      </List>
      <ListSubheader sx={{ margin: 0 }}>Messages</ListSubheader>
      <Divider />
      <List>
        <ListItem onClick={() => navigateTo("/admin/messages")}>
          <ListItemButton>
            <ListItemIcon>
              <CategoryOutlined />
            </ListItemIcon>
            <ListItemText primary={"List Messages"} />
          </ListItemButton>
        </ListItem>
      </List>
      <ListSubheader sx={{ margin: 0 }}>User</ListSubheader>
      <Divider />
      <ListItem onClick={() => logout()}>
        <ListItemButton>
          <ListItemIcon>
            <KeyOutlined />
          </ListItemIcon>
          <ListItemText primary={"Salir"} />
        </ListItemButton>
      </ListItem>

    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="py-8">
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Admin Panel
          </Typography>
        </Toolbar>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </AppBar>
    </Box>
  );
}

export default AdminNavbar;