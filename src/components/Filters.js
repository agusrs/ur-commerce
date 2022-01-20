import { Checkbox, FormControlLabel, FormLabel, Grid, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

const Filters = ({ categories, sizes, onChangeSize, orderBy, handleChangeOrderBy }) => {

    return (
        <Grid container direction='column' marginTop={2} spacing={2} >
            <Grid item>
                <FormLabel id="demo-simple-select-label">Ordenar por:</FormLabel>
                <Select
                    labelId="order-by-select-label"
                    id="order-by-select"
                    value={orderBy}
                    label="Ordenar por:"
                    sx={{ width: 150 }}
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
                {categories.length > 1 &&
                    <Stack spacing={1} >
                        <FormLabel>Categorías</FormLabel>
                        {categories.map(c => (
                            <Typography key={c} component={Link} style={{ color: 'inherit', textDecoration: 'inherit' }} sx={{ ':hover': { textDecoration: 'underline!important' } }} to={`/${c}`} >{c.toUpperCase()}</Typography>
                        ))}
                    </Stack>
                }
            </Grid>
            <Grid item>
                <Stack>
                <FormLabel>Talle</FormLabel>
                {sizes.map(s => (
                    s.value > 0 && <FormControlLabel key={s.name} control={<Checkbox onChange={(e) => onChangeSize(e, s.name)} />} label={s.name.toUpperCase() + ` (${s.value})`} />
                ))}
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Filters
