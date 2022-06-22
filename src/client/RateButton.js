import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function RateButton() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 6 },
      }}
    >
      <Typography component="legend">Reviews</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        variant="contained"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
