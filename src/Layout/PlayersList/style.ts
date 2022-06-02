export const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", md: "baseline" },
  padding: { xs: "1rem", md: "5rem 0 0 6.5rem" },
};

export const fieldStyle = {
  width: { xs: "21rem" , md: "27rem"},
  marginBottom: "2.2rem",

  "& fieldset": {
    borderRadius: "1rem",
    backgroundColor: "#000",
    opacity: 0.3,
  },

  "& label": {
    color: "#fff",
    opacity: 0.5,
    fontFamily: "Montserrat Bold"
  },
};

export const playerContainerStyle = {
  display: "flex",
  width: { xs: "21rem", md: "27rem" },
  height: "8rem",
  marginBottom: "1rem",
  backgroundColor: "#fff",
  overflow: "hidden",
  boxShadow: "0 0 0.9rem #00000047",
  cursor: "pointer",
};

export const playerImgStyle = {
  width: "13rem",
  position: "relative",
  right: { xs: "2.4rem", md: "1.4rem" },
  bottom: "0.5rem",
};

export const playerInfoStyle = {
  display: "flex", 
  flexDirection: "column", 
  padding: "1.5rem 0", 
  width: "52%", 
  textAlign: "left"
};

export const title = {
  fontFamily: "Montserrat Bold", 
  color:"#F2753B",
};

export const subtitle = {
  fontFamily: "Mulish Bold", 
  color: "#000000", 
  opacity: 0.3, 
  fontSize: "0.8rem",
  textTransform: "uppercase"
};

export const fontBigSubtitle = {
  fontSize: "1rem",
};

export const cardText = {
  fontFamily: "Montserrat Bold", 
  color:"#F2753B", 
  fontSize: "0.6rem"
};

export const fontBigCardText = {
  fontSize: "0.8rem",
};

export const playerInfoRow1 = {
  display: "flex", 
  justifyContent: "space-between", 
  width: { xs: "19rem", md: "23rem" }, 
  marginBottom: "3.5rem"
};

export const playerInfoRow2 = {
  display: "flex", 
  justifyContent: "space-between", 
  width: { xs: "9rem", md: "11.5rem" }, 
  marginBottom: "3.5rem"
};

export const playerInfoRow3 = {
  display: "flex", 
  justifyContent: "space-between", 
  width: { xs: "10.5rem", md: "12.5rem" },
};

export const playerInfoData = {
  display: "flex", 
  flexDirection: "column"
};

export const modalStyle = {
  display: "flex",
  justifyContent: "center",
  padding: "1rem 0",
  "& .MuiBackdrop-root": { backgroundColor: "rgba(0, 0, 0, 0.1)"} 
};

export const modalStyleContainer = {
  display: "flex", 
  flexDirection: "column", 
  alignItems: "center", 
  height: "50rem",
};

export const closeIconStyle = {
  color: "#fff", 
  fontSize: "3.5rem", 
  marginBottom: "1.5rem",
};

export const modalCard = {
  display: "flex",
  justifyContent: "space-between",
  width: { xs: "19rem", md: "67rem" },
  backgroundColor: "#fff",
  padding: { xs: "2rem 1rem", md: "2.8rem 0 5rem 0" },
  position: "relative",
};

export const modalCardImgStyle = {
  display: { xs: "none", md: "block" },
  width: "25rem",
  position: "absolute",
  left: "-7rem",
  top: "-0.4rem",
};

export const modalCardCountryStyle = {
  marginRight: { xs: "0", md: "3rem" },
  position: { xs: "absolute", md: "relative" },
  right: { xs: "1rem", md: "0" },
};

export const modalCardCountryCodeStyle = {
  fontFamily: "Mulish Semibold", 
  fontSize: { xs: "1rem", md: "2rem" }, 
  letterSpacing: "1rem", 
  padding: { xs: "0", md: "0 0.5rem" },
};