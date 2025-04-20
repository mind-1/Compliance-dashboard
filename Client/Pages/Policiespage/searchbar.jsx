import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
      height: 40, // Set your desired height here
      padding: '0 14px', // Adjust padding as needed
    },
    '& .MuiInputBase-input': {
      padding: '8px 14px', // Adjust padding as needed.  Important for vertical centering!
      height: '100%'
    },
  }));
  

export default function FreeSolo({policies}) {
  return (
    <Stack spacing={2} sx={{ display: 'flex', width: 200, height:'40px' }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={policies.map((option) => option.name)}
        renderInput={(params) =>  <StyledTextField
            {...params}
            label="Search Policies"
          />}
      />
      
    </Stack>
  );
}
