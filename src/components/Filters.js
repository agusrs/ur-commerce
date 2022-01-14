import { FormControl, FormLabel, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const Filters = () => {
    const [orderBy, setOrderBy] = useState(7)

    const handleChangeOrderBy = (event) => {
        setOrderBy(event.target.value);
    }

    return (
        <Grid container direction='column' marginTop={2} spacing={2} >
            <Grid item>
                    <FormLabel id="demo-simple-select-label">Ordenar por:</FormLabel>
                    <Select
                        labelId="order-by-select-label"
                        id="order-by-select"
                        value={orderBy}
                        label="Ordenar por:"
                        sx={{width: 150}}
                        variant='standard'
                        onChange={handleChangeOrderBy}
                    >
                        <MenuItem value={1}>Precio: menor a mayor</MenuItem>
                        <MenuItem value={2}>Precio: mayor a menor</MenuItem>
                        <MenuItem value={3}>A - Z</MenuItem>
                        <MenuItem value={4}>Z - A</MenuItem>
                        <MenuItem value={5}>Más antiguo al más reciente</MenuItem>
                        <MenuItem value={6}>Más reciente al más antiguo</MenuItem>
                        <MenuItem value={7}>Más vendidos</MenuItem>
                    </Select>
            </Grid>
            <Grid item>
                <FormLabel>Categorías</FormLabel>
            </Grid>
            <Grid item>
                <FormLabel>Talle</FormLabel>
            </Grid>
        </Grid>
    )
}

export default Filters
