import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Nakamoto from "../../screens/sharedScreens/Nakamoto";
import Szabo from "../../screens/sharedScreens/Szabo";
import Finney from "../../screens/sharedScreens/Finney";
import Buterin from "../../screens/sharedScreens/Buterin";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

function HorseTabBar() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full">
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="NAKAMOTO" />
        <Tab label="SZABO" />
        <Tab label="FINNEY" />
        <Tab label="BUTTERIN" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Nakamoto />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Szabo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Finney />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Buterin />
      </TabPanel>
    </div>
  );
}

export default HorseTabBar;
