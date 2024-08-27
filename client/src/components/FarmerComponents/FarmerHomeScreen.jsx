import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, CssBaseline, Typography, Grid, Toolbar, AppBar, IconButton, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';

const FarmerHome = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    farmerId: '',
    location: '',
    category: '',
    productName: '',
    expirydate: '',
    date: '',
    time: '',
    totalWeight: '',
    numberOfUnits: '',
    temperature: '',
    humidity: '',
    additionalNotes: ''
  });

  const [harvests, setHarvests] = useState([]);

  useEffect(() => {
    fetchHarvests();
  }, []);

  const fetchHarvests = async () => {
    try {
      const response = await axios.get('http://localhost:5000/h/farmerdata');
      setHarvests(response.data.map((item, index) => ({ id: index + 1, ...item })));
    } catch (error) {
      console.error("Error fetching harvests:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/h/harvest', formData);
      fetchHarvests();
      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const columns = [
    { field: 'farmerId', headerName: 'Farmer ID', width: 150 },
    { field: 'productName', headerName: 'Product Name', width: 150 },
    { field: 'date', headerName: 'date', width: 150 },
    {
      field: 'view',
      headerName: 'View',
      width: 150,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/harvest-product-view/${harvests[params.id-1]._id}`)}
        >
          View
        </Button>
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Farm
          </Typography>
          <IconButton color="inherit" onClick={() => navigate('/home')}>
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => console.log('Logout')}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Harvest Details
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid rows={harvests} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
        </Box>
        <Box mt={4} textAlign="center">
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Add New 
          </Button>
        </Box>
      </Container>

      {/* FarmerForm */}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Farmer ID"
                name="farmerId"
                value={formData.farmerId}
                onChange={handleChange}
                placeholder="Enter your unique Farmer ID"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter the general location or region of the farm"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <MenuItem value="Vegetable">Vegetable</MenuItem>
                <MenuItem value="Fruit">Fruit</MenuItem>
                <MenuItem value="DairyProduct">DairyProduct</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Enter the product name"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                label="Variety"
                name="variety"
                value={formData.variety}
                onChange={handleChange}
                placeholder="Enter variety (if applicable)"
              />
            </Grid> */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="time"
                label="Time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Total Weight (Kg)"
                name="totalWeight"
                value={formData.totalWeight}
                onChange={handleChange}
                placeholder="Enter total weight in kilograms"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Number of Units"
                name="numberOfUnits"
                value={formData.numberOfUnits}
                onChange={handleChange}
                placeholder="Enter the number of crates, boxes, or items"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="Temperature"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Humidity"
                name="humidity"
                value={formData.humidity}
                onChange={handleChange}
                placeholder="Humidity"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="ExpiryDate"
                name="expirydate"
                value={formData.expirydate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Additional Notes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                multiline
                rows={3}
                placeholder="Any additional remarks or observations"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FarmerHome;
