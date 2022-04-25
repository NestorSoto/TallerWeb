import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import products from "../product-data";
import { Total } from "./Total";
import Product from "./Product";
import { Typography } from "@material-ui/core";
import CheckoutCard from "./CheckoutCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        {products.map((product) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <CheckoutCard key={product.id} product={product} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography aline="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
          <FormRow />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
export default CheckoutPage;
