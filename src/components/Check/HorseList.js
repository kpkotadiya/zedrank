import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React from "react";
import CommonGraph from "../../components/commonComponent/CommonGraph";
import useCurrencyState from "../../state/currencyState";

function HorseList(props) {
  const { currencyDetail } = useCurrencyState();
  return (
    <div>
      {props.horseData.map((horse, index, array) => {
        return (
          <Accordion key={horse.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex flex-row w-full">
                <div className=" flex sm:w-5/12 mt-2">
                  <img
                    src={horse.horse.img_url}
                    alt="No horse available"
                    style={{ height: "40px" }}
                  />

                  <div className="flex flex-col ml-4">
                    <Typography>{horse.key.toUpperCase()}</Typography>
                    <Typography>
                      {currencyDetail.id === 1
                        ? currencyDetail.currency +
                          "" +
                          (horse.price * props.etherData).toFixed(2)
                        : horse.price + " " + currencyDetail.currency}
                    </Typography>
                  </div>
                </div>

                <div className="sm:w-4/12 "></div>
                <div className=" sm:w-3/12">
                  <Typography>UNRACED</Typography>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <CommonGraph
                horsePrice={horse.price}
                horseName={horse.key.toUpperCase()}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

export default HorseList;
