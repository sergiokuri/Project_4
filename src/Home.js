import React from "react";

import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
function Home() {
  return (
    <div>
      <Grid container>
        <Grid item sx={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
