import { ClassNames } from "@emotion/react";
import { CleaningServices } from "@mui/icons-material";
import accounting from "accounting";
import { Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    marginTop: "rem",
  },
}));
export const Total = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h5>Total item :3</h5>
      <h5>{accounting.formatMoney(50, "PEN", 2, ",", ".")}</h5>
      <Button variant="contained" color="primary">
        check out
      </Button>
    </div>
  );
};
