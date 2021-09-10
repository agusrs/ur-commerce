import { CircularProgress, IconButton, InputAdornment, Fade, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import Close from '@material-ui/icons/Close';

const SearchBar = () => {

    const [search, setSearch] = useState(false)
    const [searchOptions, setSearchOptions] = useState([])
    const [loading, setLoading] = useState(true)
    const [showButton, setShowButton] = useState(true)

    const onClickSearch = () => {
        if (!search) {
            setSearch(true)
            setShowButton(false)
        }
        else {
            alert("busco")
        }
    }

    const handleSearch = (event, value) => {

    }

    return (
        <>
            <Fade in={search} timeout={search ? 500 : 500} onExited={() => setShowButton(true)} mountOnEnter unmountOnExit >
                <div>
                    <Autocomplete
                        id="searchbar"
                        options={searchOptions}
                        freeSolo
                        disableClearable={true}
                        multiple={false}
                        disabled={false}
                        getOptionSelected={(option, value) => option["name"] === value["name"]}
                        getOptionLabel={(option) => option["name"]}
                        onChange={(event, value) => handleSearch(event, value)}
                        style={{ width: 300 }}
                        loading={loading}
                        loadingText={loading ? <CircularProgress color="inherit" size={20} /> : null}
                        renderInput={(params) =>
                            <TextField {...params} placeholder="Buscar..." autoFocus={true} variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IconButton
                                                onClick={() => setSearch(false)}
                                                edge="end"
                                            >
                                                <Close />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <React.Fragment>
                                            {params.InputProps.endAdornment}
                                            <InputAdornment position="ends">
                                                <IconButton
                                                    edge="end"
                                                >
                                                    <SearchIcon />
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
                <IconButton onClick={() => onClickSearch()} >
                    <SearchIcon />
                </IconButton>
            }
        </>
    )
}

export default SearchBar
