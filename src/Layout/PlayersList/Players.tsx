import React, { useEffect, useState } from "react";
import './index.css';
import {
  homeStyle,
  fieldStyle,
  playerContainerStyle, 
  playerImgStyle, 
  playerInfoStyle,
  title,
  subtitle,
  cardText,
  playerInfoData,
  fontBigCardText
} from "./style";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import PlayerDetails from "./PlayerDetails";

/**
 *  Component displaying players card.
 */
const Players = () => {
  const [players, setPlayers] = useState([]);
  const [playerId, setPlayerId] = useState(Number);
  const [errors, setErrors] = useState<any>();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = (id: number) => {
    setOpen(true);
    setPlayerId(id)
  };
  
  useEffect(() => {
    const getAPIData = async () => {
      try {
        const apiResponse = await fetch("./data.json");
        const json = await apiResponse.json();
        const data = (json.players);
        setPlayers(data);
      } catch (error) {
        setErrors(error);
        console.error("There was an error!", errors);
      }
    };
    
    getAPIData();
  }, [errors])

  return (
    <Box className="homeBcg" sx={homeStyle}>
      <TextField 
        sx={fieldStyle} 
        label="Rechercher un joueur" 
        variant="outlined" 
      />
      {players
        .sort(function(a: any, b: any){return a.data.rank - b.data.rank})
        .map((player: any, index: number) => (
          <React.Fragment>
            <Box key={index} sx={playerContainerStyle} onClick={() => handleOpen(player.id)}>
              <Box sx={{ width: { xs: "8.5rem", md: "10.5rem" } }}>
                <Box
                  sx={playerImgStyle}
                  component="img" 
                  alt="Player" 
                  src={player.picture} />
              </Box>
              <Box sx={playerInfoStyle}>
                <Box sx={{ ...title, marginBottom: "1.5rem" }}>{player.firstname} {player.lastname}</Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", }}>
                  <Box sx={playerInfoData}>
                    <Box component="span" sx={{ ...subtitle, marginBottom: "0.4rem", }}>Rank</Box>
                    <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>#{player.data.rank}</Box>
                  </Box>
                  <Box sx={playerInfoData}>
                    <Box component="span" sx={{ ...subtitle, marginBottom: "0.4rem", }}>Points</Box>
                    <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{player.data.points}</Box>
                  </Box>
                  <Box sx={playerInfoData}>
                    <Box component="span" sx={{ ...subtitle, marginBottom: "0.4rem", }}>Country</Box>
                    <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{player.country.code}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <PlayerDetails id={playerId} players={players} open={open} handleClose={handleClose} />
          </React.Fragment>
        ))
      }
    </Box>
  )
};

export default Players;