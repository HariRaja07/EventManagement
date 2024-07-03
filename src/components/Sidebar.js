import { Box, Grid, Paper, Typography, Avatar, IconButton, TextField, Button, InputAdornment, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Search, FilterList, ViewList, LocationOn, Event, Settings, Help, Person } from '@mui/icons-material';

const Sidebar = () => (
    <Box sx={{ width: 235, flexShrink: 0 }} zIndex={1} bgcolor={'white'}>
      <Paper sx={{ width: 235, height: '100vh', position: 'fixed', p: 2 , backgroundColor: 'white'}}>
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Qatar Event Hub</Typography>
        <center><Avatar alt="User Name" src="/path-to-image.jpg" sx={{ width: 56, height: 56, mb: 1 }} />
        <Typography variant="subtitle1">User Name</Typography>
        <Typography variant="body2" color="textSecondary">user@example.com</Typography></center>
        <List sx={{mt: 5}}>
          <ListItem button>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Event />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary="Help and FAQs" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );

  export default Sidebar;