import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import RateButton from "./RateButton";

export default function ProductCard() {
  function handleBuyButton() {
    console.log("buy Button clicked");
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="120"
        image="data:image/jpeg;base64,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"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        {/* <RateButton /> */}
      </CardContent>
      <CardActions>
        <Button onClick={handleBuyButton} variant="contained" size="small">
          BUY
        </Button>
      </CardActions>
    </Card>
  );
}
