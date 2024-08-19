import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from '@mui/material';

const MenSizeGuide = () => {
  const sizeData = [
    { size: 'S', chest: '43.7', waist: '41.3', sleeve: '25.2', shoulder: '18.2', length: '29.5' },
    { size: 'M', chest: '46.5', waist: '44.1', sleeve: '25.6', shoulder: '18.9', length: '30.3' },
    { size: 'L', chest: '50', waist: '47.6', sleeve: '25.6', shoulder: '19.9', length: '31.1' },
    { size: 'XL', chest: '53.5', waist: '51.2', sleeve: '26', shoulder: '20.9', length: '31.9' },
    { size: '2XL', chest: '57.1', waist: '54.7', sleeve: '26.4', shoulder: '21.9', length: '32.7' },
    { size: '3XL', chest: '61', waist: '58.7', sleeve: '26.8', shoulder: '23', length: '33.9' },
    { size: '4XL', chest: '65', waist: '62.6', sleeve: '26.8', shoulder: '24.1', length: '34.6' },
    { size: '5XL', chest: '68.9', waist: '66.5', sleeve: '26.8', shoulder: '25.2', length: '35' },
    { size: '6XL', chest: '72.8', waist: '70.5', sleeve: '26.8', shoulder: '26.3', length: '35.4' },
  ];

  return (
    <Table style={{ backgroundColor: '#FFF9C4' }}>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Brand size</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Chest (in)</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Waist (in)</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Sleeve length (in)</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Shoulder (in)</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Length (in)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sizeData.map((row) => (
          <TableRow key={row.size}>
            <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{row.size}</TableCell>
            <TableCell style={{ fontSize: '1.2rem' }}>{row.chest}</TableCell>
            <TableCell style={{ fontSize: '1.2rem'}}>{row.waist}</TableCell>
            <TableCell style={{ fontSize: '1.2rem' }}>{row.sleeve}</TableCell>
            <TableCell style={{ fontSize: '1.2rem' }}>{row.shoulder}</TableCell>
            <TableCell style={{ fontSize: '1.2rem' }}>{row.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const WomenSizeGuide = () => {
  const sizeData = [
    { size: 'XS', chest: '32.3 - 33.3', waist: '24 - 25', hip: '35.2 - 36.2' },
    { size: 'S', chest: '34.3 - 35.3', waist: '26 - 27', hip: '37.2 - 38.2' },
    { size: 'M', chest: '36.3 - 37.3', waist: '28 - 29', hip: '39.2 - 40.2' },
    { size: 'L', chest: '39 - 40', waist: '30.7 - 31.7', hip: '41.9 - 42.9' },
    { size: 'XL', chest: '41.7 - 42.7', waist: '33.5 - 34.4', hip: '44.7 - 45.7' },
    { size: 'XXL', chest: '44.5 - 45.5', waist: '36.2 - 37.2', hip: '47.4 - 48.4' },
  ];

  return (
    <Table style={{ backgroundColor: '#FFF9C4' }}>
      <TableHead>
        <TableRow>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Brand size</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Chest (in)</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Waist (in)</TableCell>
          <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Hip (in)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sizeData.map((row) => (
          <TableRow  key={row.size}>
            <TableCell style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{row.size}</TableCell>
            <TableCell style={{ fontSize: '1.2rem'}}>{row.chest}</TableCell>
            <TableCell style={{ fontSize: '1.2rem'}}>{row.waist}</TableCell>
            <TableCell style={{ fontSize: '1.2rem'}}>{row.hip}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const SizeGuide = ({ open, handleClose }) => {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleSelectGuide = (guide) => {
    setSelectedGuide(guide);
  };

  const handleBack = () => {
    setSelectedGuide(null);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {selectedGuide ? (
          <>
            {selectedGuide === 'men' ? 'Men\'s Size Guide ------------>    Press "Back" to see Women\'s Size Guide' : 'Women\'s Size Guide   ------------>   Press "Back" to see     Men\'s Size Guide'}
            <Button onClick={handleBack} 
             style={{ float: 'right' ,
                fontSize: '1rem', 
                color: '#202A38',
                fontWeight: 'bold',
             }}>Back</Button>
          </>
        ) : 'Select Your Perfect Size'}
      </DialogTitle>
      <DialogContent dividers>
        {!selectedGuide ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="contained" 
              fullWidth onClick={() => handleSelectGuide('men')}
              style={{ backgroundColor: '#26C2A8',
                 color: 'black',
                  fontWeight: 'bold' ,
                  fontSize: '1.25rem',  // Increase font size
                  padding: '12px 24px'  // Increase padding for larger buttons
                }}
              >
                Men
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth onClick={() => handleSelectGuide('women')}
                 style={{ backgroundColor: '#26C2A8', 
                    color: 'black', 
                    fontWeight: 'bold',
                    fontSize: '1.25rem',  // Increase font size
                    padding: '12px 24px'  // Increase padding for larger buttons
                }}
                >
                Women
              </Button>
            </Grid>
          </Grid>
        ) : selectedGuide === 'men' ? (
          <MenSizeGuide />
        ) : (
          <WomenSizeGuide />
        )}
      </DialogContent>
      <Button onClick={handleClose} 
      style={{ margin: '10px',
       color: '#202A38',
       fontWeight: 'bold',
       fontSize: '1.25rem',
       }}>Close</Button>
    </Dialog>
  );
};

export default SizeGuide;
