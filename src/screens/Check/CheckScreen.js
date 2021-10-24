import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import HorseList from "../../components/Check/HorseList";
import ZedFooter from "../../components/commonComponent/ZedFooter";

function CheckScreen() {
  const [etherData, setEtherData] = useState();
  const [horseData, setHorseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://apix.zedranks.com/api/v1/ethers")
      .then((response) => {
        if (response.data.length !== 0) {
          setEtherData(response.data[0].price);
        }
      })
      .catch((err) => {
        setEtherData(4000);
      });

    axios
      .get("https://apix.zedranks.com/api/v1/floors/zed-run-official")
      .then((response) => {
        if (response.data.length !== 0) {
          setHorseData(response.data);
        }
      })
      .catch((err) => {
        setHorseData([]);
      });
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        PRICING INFO
      </Typography>
      <Typography variant="h6" gutterBottom component="div">
        ZED RUN UNRACED LISTING FLOORS
      </Typography>
      <HorseList etherData={etherData} horseData={horseData} />
      <ZedFooter />
    </div>
  );
}

export default CheckScreen;
