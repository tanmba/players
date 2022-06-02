import React from 'react';
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {
  title,
  subtitle,
  cardText,
  playerInfoRow1,
  playerInfoRow2,
  playerInfoRow3,
  playerInfoData,
  fontBigSubtitle,
  fontBigCardText,
  modalStyle,
  modalStyleContainer,
  closeIconStyle,
  modalCard,
  modalCardImgStyle,
  modalCardCountryStyle,
  modalCardCountryCodeStyle
} from "./style";

type PlayerDetailsProps = {
  /**
   * The id of the player.
  */
  id: number;
  /**
   * Whether or not the modal is open.
  */
  open: boolean;
  /**
   * Function to be called when the modal is closed.
  */
  handleClose: () => void;
  /**
   * List of all the players.
  */
  players: never[];
};

/**
 *  Modal showing each players details.
 */
const PlayerDetails = ({ id, players, open, handleClose}: PlayerDetailsProps) => {

  const weightConverter = (value: number) => {
    const weight = value/1000;
    return weight;
  };

  return (
    <React.Fragment>
      {id && [players.find((element: any) => element.id === id)].map((info: any) => (
        <Modal
          open={open}
          onClose={handleClose}
          sx={modalStyle}
        >
          <Box sx={modalStyleContainer}>
            <Button variant="text" onClick={handleClose}>
              <CloseIcon sx={closeIconStyle} />
            </Button>
            <Box sx={modalCard}>
              <Box
                sx={modalCardImgStyle}
                component="img" 
                alt="Player" 
                src={info.picture} 
              />
              <Box sx={{ marginLeft: { xs: "0", md: "12rem" } }}>
                <Box sx={{ ...title, marginBottom: "3.5rem" }}>
                  <Box className="outline" sx={{ fontSize: { xs: "2rem", md: "5rem" } }}>{info.firstname}</Box>
                  <Box sx={{ fontSize: { xs: "3rem", md: "7rem" }, marginTop: { xs: "0", md: "-1.5rem" } }}>{info.lastname}</Box>
                </Box>
                <Box sx={{ marginLeft: { xs: "0", md: "8.5rem" } }}>
                  <Box sx={playerInfoRow1}>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Rank</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>#{info.data.rank}</Box>
                    </Box>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Points</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{info.data.points}</Box>
                    </Box>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Country</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{info.country.code}</Box>
                    </Box>
                  </Box>
                  <Box sx={playerInfoRow2}>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Birthday</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>22/05/1987</Box>
                    </Box>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Age</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{info.data.age}</Box>
                    </Box>
                  </Box>
                  <Box sx={playerInfoRow3}>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Weight</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{weightConverter(info.data.weight)} kg</Box>
                    </Box>
                    <Box sx={playerInfoData}>
                      <Box component="span" sx={{ ...subtitle, ...fontBigSubtitle, marginBottom: "0.4rem", }}>Height</Box>
                      <Box component="span" sx={{ ...cardText, ...fontBigCardText }}>{info.data.height}</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={modalCardCountryStyle}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Box
                    sx={{ width: { xs: "5rem", md: "8rem" } }}
                    component="img" 
                    alt="Player" 
                    src={info.country.picture} 
                  />
                  <Box sx={{ ...subtitle, ...modalCardCountryCodeStyle }}>{info.country.code}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      ))}
    </React.Fragment>
  );
}

export default PlayerDetails;
