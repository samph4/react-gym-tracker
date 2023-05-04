import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchCard({onSearch}) {

    const [summonerText, setsummonerText] = useState('')

    const handleSearch = () => {
        onSearch(summonerText);
    }

    const handleTextChange = (event) => {
        setsummonerText(event.target.value);
    }

    return(
        <div className="content-page">
        <div className="profile-search-card">    
            <TextField 
                id="outlined-basic" 
                label="Summoner Name" 
                variant="outlined" 
                value={summonerText}
                onChange={handleTextChange}
                InputProps={{
                    style: {
                      backgroundColor: '#ffffff',
                    }}}/>
            <Button 
                variant="contained" 
                onClick={handleSearch}
            >Submit</Button>
            {/* <h1>{summonerText}</h1> */}
        </div>
        </div>
    )
}

function SummonerCard({summonerText, apiKey}) {

    const summonerEndpoint = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerText}?api_key=${apiKey}`
    const [summonerData, setSummonerData] = useState({});
    const [matchData, setMatchData] = useState([]);
  
    useEffect(() => {
      async function fetchSummonerData() {
        const response = await axios.get(summonerEndpoint);
        setSummonerData(response.data);
      }
  
      fetchSummonerData();
    }, [summonerEndpoint]);
  
    useEffect(() => {
      async function fetchMatchData() {
        const response = await axios.get(`https://euw1.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerData.puuid}/ids?start=0&count=5&api_key=${apiKey}`);
        const matchIds = response.data;
        const matches = [];
  
        for (const matchId of matchIds) {
          const match = await axios.get(`https://euw1.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`);
          matches.push(match.data);
        }
  
        setMatchData(matches);
      }
  
      if (summonerData.puuid) {
        fetchMatchData();
      }
    }, [summonerData.puuid, apiKey]);
  
    return (
      <div className="summoner-card">
        <div className="summoner-card-key-info">
          <p>{summonerData.summonerLevel}</p>
          <p><b>{summonerData.name}</b></p>
        </div>
        <div className="summoner-card-match-info">
          {matchData.map((match, index) => (
            <div key={index}>
              <p><b>Match {index + 1}</b></p>
              <p>{match.info.gameMode}</p>
              <p>{match.info.gameDuration}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  

function Profile() {

    const api_key = "RGAPI-ac82af86-6e97-402c-a8cf-c34d5a3c0e9c"

    const [summonerText, setsummonerText] = useState('');

    const handleSearch = (text) => {
        setsummonerText(text);
    };


    return (
        <div>
            <SearchCard onSearch={handleSearch}/>
            <SummonerCard summonerText={summonerText} apiKey={api_key}/>
        </div>
    )
}

export default Profile;