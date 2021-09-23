import { CircularProgress, IconButton, InputAdornment, Fade, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import Close from '@material-ui/icons/Close';

const SearchBar = () => {

    const [search, setSearch] = useState(false)
    const [searchOptions, setSearchOptions] = useState([])
    const [loading, setLoading] = useState(false)
    const [showButton, setShowButton] = useState(true)

    const showAutoComplete = () => {
        if (!search) {
            setSearch(true)
            setShowButton(false)
        }
    }

    const handleSearch = (event) => {
        setLoading(true)
        fetch(`http://localhost:3001/products?q=${event.currentTarget.value}&_limit=10`)
        .then((res) => {
            res.json().then((data) => {
                setSearchOptions(data)
            })
        })
        .catch((err) => {
            
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <Fade in={search} timeout={search ? 500 : 500} onExited={() => setShowButton(true)} mountOnEnter unmountOnExit >
                <div>
                    <Autocomplete
                        id="searchbar"
                        options={searchOptions}
                        freeSolo
                        size="small"
                        disableClearable={true}
                        multiple={false}
                        disabled={false}
                        getOptionSelected={(option, value) => option["name"] === value["name"]}
                        getOptionLabel={(option) => option["name"]}
                        onChange={(event, value) => alert("busca")}
                        style={{ width: 300 }}
                        loading={loading}
                        loadingText={loading ? <CircularProgress color="inherit" size={20} /> : null}
                        renderInput={(params) =>
                            <TextField {...params} placeholder="Buscar..." autoFocus={true} onChange={(event) => handleSearch(event)} variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton
                                                onClick={() => setSearch(false)}
                                                edge="end"
                                                size="small"
                                            >
                                                <Close htmlColor="#ffffff" />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <React.Fragment>
                                            {params.InputProps.endAdornment}
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="start"
                                                    size="small"
                                                >
                                                    <SearchIcon htmlColor="#ffffff" />
                                                </IconButton>
                                            </InputAdornment>
                                        </React.Fragment>
                                    )
                                }}
                            />
                        }
                    />
                </div>
            </Fade>
            {showButton &&
                <IconButton onClick={() => showAutoComplete()} >
                    <SearchIcon htmlColor="#ffffff" />
                </IconButton>
            }
        </>
    )
}

export default SearchBar
