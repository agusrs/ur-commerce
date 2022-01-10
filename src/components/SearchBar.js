import { CircularProgress, IconButton, InputAdornment, Fade, TextField } from '@mui/material';
import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@mui/material';
import Close from '@mui/icons-material/Close';
import api from "../apis/apiProducts";

const SearchBar = ({ history }) => {

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
        if (event.target.value === '')
            setSearchOptions([])
        if (event.target.value.trim()) {
            setLoading(true)
            api.get(`?q=${event.currentTarget.value}&_limit=10`)
            .then((res) => {
                setSearchOptions(res.data)
            })
            .catch((err) => {

            })
            .finally(() => {
                setLoading(false)
            })
        }
    }

    const itemSelected = (evt, value) => {
        history.push(`/productos/${value?.name}`.replace(/\s+/g, '-').toLowerCase())
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
                        onChange={(event, value) => itemSelected(event,value)}
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

export default withRouter(SearchBar)
