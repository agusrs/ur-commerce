import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CustomAutoComplete({ id, data, field, label, disabled, handleChange, placeholder, autoFocus }) {
  return (
    <Autocomplete
      id={id}
      options={data}
      multiple={false}
      disabled={disabled}
      getOptionSelected={(option,value) => option[field] === value[field]}
      getOptionLabel={(option) => option[field]}
      onChange={(event, value) => handleChange(event, value)}
      renderInput={(params) =>
        <TextField {...params} placeholder={placeholder} autoFocus={autoFocus} label={label} variant="standard" />
      }
    />
  );
}