import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import useCurrencyState from "../../state/currencyState";
import AboutUs from "./AboutUs";


function ZedHeader() {
  const { currencyDetail, setCurrencyDetail } = useCurrencyState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="mb-4">
      <AppBar color="default" position="sticky">
        <Toolbar>
          <div
            className="flex flex-row m-auto p-2"
            style={{ minWidth: "500px" }}
          >
            <div className="sm:w-2/6">
              <img
                src="/zedranks-logo-text.png"
                alt="No logo available"
                style={{ height: "40px" }}
              />
            </div>
            <div className="sm:w-4/6">
              <Link to="/check">
                <Button>Floors</Button>
              </Link>
              <Link to="/sold">
                <Button>Sold</Button>
              </Link>
              <Link to="/listed">
                <Button>Listed</Button>
              </Link>
              {currencyDetail.id === 1 ? (
                <IconButton
                  aria-label="money"
                  color="primary"
                  onClick={() => setCurrencyDetail({ id: 2, currency: "ETH" })}
                >
                  <AttachMoneyIcon />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="money"
                  color="primary"
                  onClick={() => setCurrencyDetail({ id: 1, currency: "$" })}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <IconButton
                aria-label="info"
                color="primary"
                onClick={() => handleClickOpen()}
              >
                <InfoIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <AboutUs open={open} handleClose={handleClose} />
    </div>
  );
}

export default ZedHeader;
