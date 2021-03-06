import Typography from "@mui/material/Typography";
import React from "react";
import HorseTabBar from "../../components/commonComponent/HorseTabBar";
import ZedFooter from "../../components/commonComponent/ZedFooter";

function SoldScreen() {
  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        RECENTLY SOLD
      </Typography>
      <div className="w-full">
        <HorseTabBar />
        <ZedFooter />
      </div>
    </>
  );
}

export default SoldScreen;
