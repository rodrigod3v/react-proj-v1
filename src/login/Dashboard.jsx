// src/Dashboard.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, AppBar, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState('Home');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (view) => {
    setCurrentView(view);
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {['Criar Tarefa', 'Editar Tarefa', 'Listar Tarefas'].map((text) => (
            <ListItem button key={text} onClick={() => handleMenuClick(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {currentView === 'Criar Tarefa' && <h2>Criar uma nova tarefa</h2>}
        {currentView === 'Editar Tarefa' && <h2>Editar uma tarefa existente</h2>}
        {currentView === 'Listar Tarefas' && <h2>Listar todas as tarefas</h2>}
      </Box>
    </Box>
  );
}

export default Dashboard;
