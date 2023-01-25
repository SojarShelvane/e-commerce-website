import React from "react";
import Box from "@mui/material/Box";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DiscountIcon from "@mui/icons-material/Discount";
import { Container } from "@mui/system";
import { Grid, Paper, styled } from "@mui/material";
import DailyDeals from "./DailyDeals";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
var shippingDetails = [
  {
    heading: "Free Shipping",
    subHeading: "Free shipping on all order",
    icon: <LocalShippingIcon sx={{ fontSize: "45px", marginTop: "20px" }} />,
  },
  {
    heading: "Support 24/7",
    subHeading: "Free shipping on all order",
    icon: <AccessTimeIcon sx={{ fontSize: "45px", marginTop: "20px" }} />,
  },
  {
    heading: "Money Return",
    subHeading: "Free shipping on all order",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "45px", marginTop: "20px" }} />,
  },
  {
    heading: "Order Discount",
    subHeading: "Free shipping on all order",
    icon: <DiscountIcon sx={{ fontSize: "45px", marginTop: "20px" }} />,
  },
];
const ProvidedServices = () => {
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {shippingDetails.map((services) => {
              return (
                <Grid item xs={12} md={3} sm={12} lg={3} xl={3}>
                  <Item>
                    <Box sx={{ flexGrow: 1 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={2}>
                          <Item>{services.icon}</Item>
                        </Grid>
                        <Grid item xs={6} sx={{ paddingTop: "0px" }}>
                          <Item sx={{ paddingTop: "0px", marginTop: "0px" }}>
                            <h4>{services.heading}</h4>
                            <h6>{services.subHeading}</h6>
                          </Item>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <DailyDeals />
    </>
  );
};

export default ProvidedServices;
