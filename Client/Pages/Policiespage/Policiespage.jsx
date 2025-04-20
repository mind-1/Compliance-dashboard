import React from "react";

//Grid
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
//Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//Search bar
import FreeSolo from "./searchbar";
//Button
import Button from '@mui/material/Button';

const VerticalGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

function createData(number,name, standards, status,lastapprovedversion) {
  return {number,name, standards, status,lastapprovedversion};
}

const rows = [
  createData(1,'Information Security Policy', 'ISO 27001', 'OK', '2024-01-15'),
  createData(2,'Data Management Policy', 'GDPR, CCPA', 'OK', '2024-03-20'),
  createData(3,'Operations Security Policy', 'NIST 800-53', 'Draft', '2024-02-10'),
  createData(4,'Acceptable Use Policy', 'Various internal standards', 'OK', '2023-11-01'),
  createData(5,'Incident Response Policy', 'NIST SP 800-61', 'OK', '2024-04-05'),
  createData(6,'Business Continuity Plan', 'ISO 22301', 'Draft', '2024-05-12'),
  createData(7,'Privacy Policy', 'HIPAA', 'OK', '2024-02-28'),
];

export default function Policiespage () {
  return (
    <div>
       <h2>Policies</h2>
       <VerticalGrid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', flexDirection:'row'}}>
          <FreeSolo policies={rows} /> 
             <h4>&nbsp;&nbsp; | Filter by</h4>
             <Button sx={{ border:'10px'}} size="small">Framework</Button>
             <Button>Status</Button>
             <Button>Type</Button>
        </Grid>
        <Grid item xs={12}>
            <TableContainer component={Paper}>
          <Table sx={{ maxWidth: '100vw' ,maxHeight: '100vh' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">NAME</TableCell>
                <TableCell align="right">STANDARDS</TableCell>
                <TableCell align="right">STATUS</TableCell>
                <TableCell align="right">LASTAPPROVEDVERSION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.number}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.standards}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.lastapprovedversion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Grid>
    </VerticalGrid>
    </div>
  );
};