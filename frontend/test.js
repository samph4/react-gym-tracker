const axios = require('axios');

const apiKey = 'RGAPI-ac82af86-6e97-402c-a8cf-c34d5a3c0e9c'; // replace with your own API key
const summonerName = 'Sampha'; // replace with the summoner name you want to search for
const region = 'europe'; // EUW region

// First, retrieve the summoner profile information
const summonerEndpoint = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;

axios.get(summonerEndpoint)
  .then((response) => {
    const summonerData = response.data;
    console.log(summonerData);

    // Then, use the summoner's account ID to retrieve their match history
    const matchHistoryEndpoint = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/EKKdtpp6Ln7LfY13oTfgHv5B7U6J6GqhythIxR09lcb0q59jIiVn71muq45nez-bLHUJGwyCApiScA/ids?start=0&count=20&api_key=RGAPI-ac82af86-6e97-402c-a8cf-c34d5a3c0e9c`;
    
    axios.get(matchHistoryEndpoint)
      .then((matchHistoryResponse) => {
        const matchHistoryData = matchHistoryResponse.data;
        console.log(matchHistoryData);
      })
      .catch((matchHistoryError) => {
        // console.log(matchHistoryError);
      });
  })
  .catch((error) => {
    console.log(error);
  });

  // console.log('dgjhsg')