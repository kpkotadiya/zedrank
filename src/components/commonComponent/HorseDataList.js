import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useCurrencyState from "../../state/currencyState"

function HorseDataList({ horseList }) { 
  const {currencyDetail} = useCurrencyState();

  return (
    <List component="nav" aria-label="secondary mailbox folder">
      {horseList.map((horseData, index, array) => {
        return (
          <ListItemButton>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt={horseData.horse.name}
                  src={horseData.horse.img_url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={horseData.horse.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      /* sx={{ display: "inline" }}
                    component="span" */
                      variant="body2"
                      color="text.primary"
                    >
                    
                      {currencyDetail.id === 1
                        ? currencyDetail.currency +
                          "" +
                          (horseData.price * 4000).toFixed(2)
                        : horseData.price + " " + currencyDetail.currency}
                    </Typography>
                    {" - " + horseData.horse.color}
                  </React.Fragment>
                }
              />
            </ListItem>
          </ListItemButton>
        );
      })}
    </List>
  );
}

export default HorseDataList;
