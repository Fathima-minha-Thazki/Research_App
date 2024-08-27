const express = require('express');
const { createHarvest, getHarvests, getHarvestsByFarmerId, getHarvestsById, getTransportData, getSellerData, getFarmerData, getSupplierData } = require('../Controllers/harvestController');

const router = express.Router();

// Route to create a new harvest entry
router.post('/harvest', createHarvest);

// Route to get all harvest entries
router.get('/harvest', getHarvests);

// Route to get harvest entries by farmerId
router.get('/harvest/farmer/:farmerId', getHarvestsByFarmerId);

// Route to get harvest entries by farmerId
router.get('/harvest/:id', getHarvestsById);
router.get('/transportdata/', getTransportData);
router.get('/sellerdata/', getSellerData);
router.get('/farmerdata/', getFarmerData);
router.get('/supplierdata/', getSupplierData);

module.exports = router;
