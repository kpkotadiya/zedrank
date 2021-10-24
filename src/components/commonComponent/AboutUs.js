import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function AboutUs(props) {
  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
        >
          About Us
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Thank you so much for joining us. ZED RANKS parses data from ZED
            RUN, OpenSea, and any other sources to help provide a better picture
            of the NFT marketplace around ZED RUN.
          </Typography>
          <Typography gutterBottom>Twitter: @zedrunrankings</Typography>
          <Typography gutterBottom>
            Reach us at info@zedranks.com or on Discord: zedranks.com#3614
          </Typography>
          <br />
          <Typography gutterBottom>
            DISCLAIMER: WE DO OUR BEST TO PROVIDE ACCURATE AND PRECISE DATA BUT
            ERRORS CAN AND DO OCCUR. We are only as good as the data we get so
            when primary sources like ZED RUN or OpenSea have issues or bugs
            this affects our data as well. When building models, we try our best
            to provide guesses into the marketplace but you are responsible for
            your own buying and selling decisions!
          </Typography>
          <br />
          <Typography gutterBottom>
            LIMITATION OF LIABILITY. ZED RANKS is owned and operated by The
            Start Project, LLC. In no event shall The Start Project, LLC or its
            members, employees, or staff be liable for any direct, indirect,
            incidental, special, or consequential damages, or damages for loss
            and profits, revenue, data, or data use, incurred by you or any
            third party, whether in an action in contract or tort, arising from
            your access, or use of, this site or any content provided on or
            through the site.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose}>
            Continue
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default AboutUs;
