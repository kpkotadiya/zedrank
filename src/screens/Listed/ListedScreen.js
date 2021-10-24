import Typography from "@mui/material/Typography";
import React from "react";
import HorseTabBar from "../../components/commonComponent/HorseTabBar";
import ZedFooter from "../../components/commonComponent/ZedFooter";

function ListedScreen() {
  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        OPENSEA FOR SALE
      </Typography>
      <HorseTabBar />
      <ZedFooter />
    </>
  );
}

export default ListedScreen;
