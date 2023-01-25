import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Deals = ["New Arrivals", "Best Seller", "New Items"];

const DailyDeals = () => {
  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Item>
                <h3
                  sx={{ margin: "0px" }}
                  style={{ fontFamily: "cursive", fontSize: "40px" }}
                >
                  Daily Deals
                </h3>
              </Item>
            </Grid>
            {Deals.map((items) => {
              return (
                <Grid item xs={12} sm={12} xl={4} md={3} lg={3} mb={2}>
                  <Item>
                    <Button>
                      <h4 style={{ fontSize: "20px", color: "#939195" }}>
                        {items}
                      </h4>
                    </Button>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default DailyDeals;
