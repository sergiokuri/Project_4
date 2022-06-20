import React from "react";
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
function Home() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item sx={4}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
