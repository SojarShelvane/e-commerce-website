import { Box, TextField } from "@mui/material";
import React from "react";

const FooterForm = () => {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, padding: "2px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
        />
      </Box>
    </div>
  );
};

export default FooterForm;
