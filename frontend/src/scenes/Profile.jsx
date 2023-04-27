import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import React, { useState } from "react";

function SearchCard({onSearch}) {

    const [searchText, setSearchText] = useState('')

    const handleSearch = () => {
        onSearch(searchText);
    }

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    }

    return(
        <div className="content-page">
        <div className="profile-search-card">    
            <TextField 
                id="outlined-basic" 
                label="Summoner Name" 
                variant="outlined" 
                value={searchText}
                onChange={handleTextChange}/>
            <Button 
                variant="contained" 
                onClick={handleSearch}
            >Submit</Button>
            {/* <h1>{searchText}</h1> */}
        </div>
        </div>
    )
}

function Summoner({searchText}) {
    return (
        <h1>{searchText}</h1>
    )
}

function Profile() {

    const api_key = "RGAPI-ac82af86-6e97-402c-a8cf-c34d5a3c0e9c"

    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
    };


    return (
        <div>
            <SearchCard onSearch={handleSearch}/>
            <Summoner searchText={searchText}/>
            <h2>{api_key}</h2>
        </div>
    )
}

export default Profile;