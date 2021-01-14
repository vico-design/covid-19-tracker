import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./styles.css";

const InfoBox = ({ title, cases, active, isRed, isGrey, total, ...props }) => {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }  ${isGrey && "infoBox--grey"}`}
      onClick={props.onClick}
    >
      <CardContent>
        <Typography className="infoBox__title">{title}</Typography>
        <Typography
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isGrey && "infoBox__cases--grey"
          }`}
          variant="h4"
        >
          {cases}
        </Typography>
        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
};
export default InfoBox;
