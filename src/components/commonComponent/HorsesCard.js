import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CommonGraph from "./CommonGraph";
import HorseDataList from "./HorseDataList";

function HorsesCard(props) {
  return (
    <Card className="mb-2">
      <CardHeader title={props.title} />

      <CardContent>
        <CommonGraph horsePrice={Math.floor(Math.random() * 10)} />
        <HorseDataList horseList={props.horseData} />
      </CardContent>
    </Card>
  );
}

export default HorsesCard;
