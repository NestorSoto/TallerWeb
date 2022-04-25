import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ClassNames } from "@emotion/react";
import { AddShoppingCart } from "@material-ui/icons";
import accounting from "accounting";
import { type } from "@testing-library/user-event/dist/type";
import "./style.css";
const useStyles = styled((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "3rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CheckoutCard({
  product: { id, name, ProductType, image, price, rating, description },
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            className={ClassNames.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "PEN", 2, ",", ".")}
          </Typography>
        }
        title={name}
        subheader="En stock"
      />
      <CardMedia
        className={ClassNames.media}
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
        title={name}
      />
      <CardActions disableSpacing className="cardActions">
        <div className="cardRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
