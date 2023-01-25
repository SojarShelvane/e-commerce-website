import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, Link, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FooterForm from "./FooterForm";
import "./Footer.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const footerAbout = ["About Us", "Store Location", "Contact", "Order Tracking"];
const footerUsefulLinks = ["Returns", "Support Policy", "Size Guide", "FAQs"];
const Footer = () => {
  return (
    <div style={{ backgroundColor: "#edeaea" }}>
      <Container>
        <Box sx={{ flexGrow: 1, margin: "0px" }}>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={12} sm={12} xl={4} md={3} lg={3}>
              <Item style={{ backgroundColor: "#edeaea" }}>
                <Button>
                  <h2 style={{ marginBottom: "0px", marginTop: "0px" }}>
                    Fantasy
                  </h2>
                </Button>
                <h5 style={{ marginTop: "0px" }}>
                  <CopyrightIcon
                    style={{ fontSize: "15px !important" }}
                  ></CopyrightIcon>{" "}
                  2022 Fantasy
                </h5>
                <h3> All Rights Reserved</h3>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              xl={4}
              md={3}
              lg={3}
              sx={{ margin: "0px" }}
            >
              <Item style={{ backgroundColor: "#edeaea" }}>
                <h3 style={{ marginBottom: "0px" }}>About Us</h3>
                {footerAbout.map((items, i) => {
                  return (
                    <Typography key={i}>
                      <Link href="#" underline="none" variant="subtitle2">
                        {items}
                      </Link>
                    </Typography>
                  );
                })}
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} xl={4} md={3} lg={3}>
              <Item style={{ backgroundColor: "#edeaea" }}>
                <h3 style={{ marginBottom: "0px" }}>Useful Links</h3>
                {footerUsefulLinks.map((items, i) => {
                  return (
                    <Typography key={i}>
                      <Link href="#" underline="none" variant="subtitle2">
                        {items}
                      </Link>
                    </Typography>
                  );
                })}
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} xl={4} md={3} lg={3}>
              <Item style={{ backgroundColor: "#edeaea" }}>
                <h3 style={{ marginBottom: "0px" }}>Subscribe</h3>
                <h4>
                  Get E-mail updates about our latest shop and special offers.
                </h4>
                <FooterForm />
                <br />
                <Button variant="contained">Subscribe</Button>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
