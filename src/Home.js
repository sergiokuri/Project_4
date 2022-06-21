import React from "react";

import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
function Home() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
