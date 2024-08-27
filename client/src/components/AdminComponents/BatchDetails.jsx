// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Button, Paper, TextField } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const BatchDetails = () => {
//   const [batches, setBatches] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/h/harvest');
//         setBatches(response.data);
//       } catch (error) {
//         console.error('Error fetching batches:', error);
//       }
//     };

//     fetchBatches();
//   }, []);

//   const columns = [
//     { field: 'batchid', headerName: 'BatchID', width: 90 },
//     { field: 'farm', headerName: 'Farm', width: 150 },
//     { field: 'supplier', headerName: 'Supplier', width: 230 },
//     { field: 'transport', headerName: 'Transport', width: 130 },
//     { field: 'seller', headerName: 'Seller', width: 130 },
//     { field: 'wastage', headerName: 'Wastage', width: 130 },
//     { field: 'reason', headerName: 'Reason', width: 130 },
//     { field: 'date', headerName: 'Date', width: 150 },
//     { field: 'nmasa', headerName: 'Nmasa', width: 130 },
//     { field: 'miud3d', headerName: 'Miud3d', width: 130 },
//   ];

//   const filteredBatches = batches.filter((batch) =>
//     batch.productName?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Box>
//       <Paper>
//         <TextField
//           label="Search"
//           variant="outlined"
//           fullWidth
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Paper>
//       <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
//         <DataGrid rows={filteredBatches} columns={columns} pageSize={5} />
//       </Box>
//     </Box>
//   );
// };

// export default BatchDetails;
// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Box, Paper, TextField } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const BatchDetails = () => {
//   const [batches, setBatches] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBatches = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/h/harvest');
//         setBatches(response.data);
//       } catch (error) {
//         console.error('Error fetching batches:', error);
//       }
//     };

//     fetchBatches();
//   }, []);

//   const columns = [
//     { field: 'batchid', headerName: 'BatchID', width: 90 },
//     { field: 'date', headerName: 'Date', width: 130 },
//     { field: 'farmerId', headerName: 'Farm', width: 150 },
//     { field: 'supplierId', headerName: 'Supplier', width: 230 },
//     { field: 'transportId', headerName: 'Transport', width: 130 },
//     { field: 'seller', headerName: 'Seller', width: 130 },
//     { field: 'wastage', headerName: 'Wastage', width: 130 },
//   ];
//   const rows = [
//     { id: 1, batchid: 'B001', date: '2024-08-01', farmerId: 'F001', supplierId: 'S001', transportId: 'T001', seller: 'Seller A', wastage: '5%' },
//     { id: 2, batchid: 'B002', date: '2024-08-02', farmerId: 'F002', supplierId: 'S002', transportId: 'T002', seller: 'Seller B', wastage: '3%' },
//     { id: 3, batchid: 'B003', date: '2024-08-03', farmerId: 'F003', supplierId: 'S003', transportId: 'T003', seller: 'Seller C', wastage: '7%' },
//     { id: 4, batchid: 'B004', date: '2024-08-04', farmerId: 'F004', supplierId: 'S004', transportId: 'T004', seller: 'Seller D', wastage: '2%' },
//   ];

//   const getRowId = (row) => row._id;

//   return (
//     <Box>
//       <Paper>
//         <TextField
//           label="Search"
//           variant="outlined"
//           fullWidth
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </Paper>
//       <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
//         <DataGrid
//           rows={batches}
//           columns={columns}
//           pageSize={5}
//           getRowId={getRowId}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default BatchDetails;
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Paper, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BatchDetails = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const initialBatches = [
    { id: 1, batchid: 'B001', date: '2024-01-01', farmerId: '150', supplierId: '145', transportId: '145', seller: '120', wastage: '30', wastageReason: 'Seller' },
    { id: 2, batchid: 'B002', date: '2024-02-01', farmerId: '300', supplierId: '298', transportId: '250', seller: '245', wastage: '55', wastageReason: 'Transport' },
    { id: 3, batchid: 'B003', date: '2024-03-01', farmerId: '400', supplierId: '350', transportId: '348', seller: '350', wastage: '50', wastageReason: 'Supplier'},
    { id: 4, batchid: 'B004', date: '2024-04-01', farmerId: '100', supplierId: '100', transportId: '100', seller: '98', wastage: '2', wastageReason: 'Seller' },
  ];

  const [batches, setBatches] = useState(initialBatches);

  const columns = [
    { field: 'batchid', headerName: 'BatchID', width: 90 },
    { field: 'date', headerName: 'Date', width: 130 },
    { field: 'farmerId', headerName: 'Farm', width: 150 },
    { field: 'supplierId', headerName: 'Supplier', width: 230 },
    { field: 'transportId', headerName: 'Transport', width: 130 },
    { field: 'seller', headerName: 'Seller', width: 130 },
    { field: 'wastage', headerName: 'Wastage', width: 130 },
    { field: 'wastageReason', headerName: 'HighestWastage', width: 130 },

  ];

  const filteredBatches = batches.filter((batch) =>
    Object.values(batch).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Box>
      <Paper>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Paper>
      <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
        <DataGrid
          rows={filteredBatches}
          columns={columns}
          pageSize={5}
          getRowId={(row) => row.id}
        />
      </Box>
    </Box>
  );
};

export default BatchDetails;
