import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
/* import css file for productdetails */
/* import "E:/Nov14 Fantasy Project/fantasy-project-nov-14/src/components/home/ProductDetails.css"; */
import "./mycss.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  ImageList,
  ImageListItem,
  Rating,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Button from "@mui/material/Button";

/* cart icon */
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProductsDetails } from "../../redux/product/productSlice";

/* Added grid Content */
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
/* Added Checkbox code */
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ProductDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { productDetails, status } = useSelector((state) => state.product);

  const [data, setData] = useState(null);
  /* added crousal for image details */

  useEffect(() => {
    if (location.pathname) {
      const id = location.pathname.split("/")[2];
      dispatch(getProductsDetails(id));
    }
  }, [location.pathname]);

  useEffect(() => {
    if (productDetails) {
      setData(productDetails);
    }
  }, [productDetails]);

  /* console.log("dtl", data); */
  const [alignment, setAlignment] = React.useState("M"); //added btn for sizes of product
  /* //added btn for sizes of product */
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        {data ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={4}>
              <Carousel
                autoPlay
                interval="5000"
                infiniteLoop
                transitionTime="1000"
                /* onChange={() => console.log("onChange Event Triggered")}
                onClickItem={() => console.log("onClickItem Event Triggered")}
                onClickThumb={() => console.log("onClickThumb Event Triggered")}
                onSwipeStart={() => console.log("onSwipeStart Event Triggered")}
                onSwipeEnd={() => console.log("onSwipeEnd Event Triggered")}
                onSwipeMove={() => console.log("onSwipeMove Event Triggered")} */
                /*  IndicatorIcon={[
                  <img
                    src={data.path[0]}
                    width="54"
                    style={{ margin: "10px" }}
                    alt="image"
                  />,
                  <img
                    src={data.path[1]}
                    width="54"
                    style={{ margin: "10px" }}
                    alt="image"
                  />,
                  <img
                    src={data.path[2]}
                    width="54"
                    style={{ margin: "10px" }}
                    alt="image"
                  />,
                  <img
                    src={data.path[3]}
                    width="54"
                    style={{ margin: "10px" }}
                    alt="image"
                  />,
                  <img src={data.path[4]} width="54" alt="image" />,
                  <img src={data.path[5]} width="54" alt="image" />,
                  <img src={data.path[6]} width="54" alt="image" />,
                ]} */
              >
                {data.path.map((ele, i) => {
                  return (
                    <>
                      <Item className="product-details">
                        <ImageList
                          className="image-slider"
                          sx={{ width: 500, height: 450 }}
                          cols={3}
                          rowHeight={164}
                        >
                          <ImageListItem>
                            <img srcSet={ele} loading="lazy" alt="bed" />
                          </ImageListItem>
                        </ImageList>
                      </Item>
                    </>
                  );
                })}
              </Carousel>
              <Button
                variant="outlined"
                sx={{ margin: "25px", marginTop: "50px" }}
              >
                <ShoppingCartOutlinedIcon /> Add to Cart
              </Button>
              <Button
                variant="outlined"
                sx={{ margin: "25px", marginTop: "50px" }}
              >
                <KeyboardDoubleArrowRightOutlinedIcon /> <h1>Buy Now </h1>
              </Button>
            </Grid>
            <Grid xs={6}>
              <Item>
                <h3></h3>
                <Link href="#" className="brandJaiDurga" color="primary">
                  {data.title}
                </Link>
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={3.5}
                    precision={1.5}
                    readOnly
                  />
                </Stack>
                <Divider />
                <br />
                <span>
                  <strong> Rs. {data.price}</strong>
                  <br />
                  M.R.P: Rs.<s> 1500</s>
                </span>
                <p>Inclusive of all taxes</p>
                <span className="Coupon">Coupon</span>
                <Checkbox size="small" {...label} defaultChecked />
                <Divider />

                {/* Added code for togglebtn for product size */}
                <h3>Select Sizes</h3>
                <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton
                    value="S"
                    style={{
                      margin: "5px",
                      border: "solid",
                      borderRadius: "2px 2px 2px 2px",
                      height: "27px",
                      borderWidth: "1px",
                    }}
                  >
                    S
                  </ToggleButton>
                  <ToggleButton
                    value="M"
                    style={{
                      margin: "5px",
                      border: "solid",
                      borderRadius: "2px 2px 2px 2px",
                      height: "27px",
                      borderWidth: "1px",
                    }}
                    size="small"
                  >
                    M
                  </ToggleButton>
                  <ToggleButton
                    value="L"
                    style={{
                      margin: "5px",
                      border: "solid",
                      borderRadius: "2px 2px 2px 2px",
                      height: "27px",
                      borderWidth: "1px",
                    }}
                  >
                    L
                  </ToggleButton>
                  <ToggleButton
                    value="XL"
                    style={{
                      margin: "5px",
                      border: "solid",
                      borderRadius: "2px 2px 2px 2px",
                      height: "27px",
                      borderWidth: "1px",
                    }}
                  >
                    XL
                  </ToggleButton>
                  <ToggleButton
                    value="XXL"
                    style={{
                      margin: "5px",
                      border: "solid",
                      borderRadius: "2px 2px 2px 2px",
                      height: "27px",
                      borderWidth: "1px",
                    }}
                  >
                    XXL
                  </ToggleButton>
                  <ToggleButton
                    value="Free Size"
                    style={{
                      margin: "5px",
                      border: "solid",
                      borderRadius: "2px 2px 2px 2px",
                      height: "27px",
                      borderWidth: "1px",
                    }}
                  >
                    Free Size
                  </ToggleButton>
                  <br />
                </ToggleButtonGroup>
                <br />
                <br />
                <Divider />
                {/* product specification details */}
                <Grid container spacing={2}>
                  {data.aboutitem.map((ele, i) => {
                    return (
                      <>
                        <Grid item xs={6}>
                          <Item>{ele.key}</Item>
                        </Grid>
                        <Grid item xs={6}>
                          <Item>{ele.value}</Item>
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
                <Divider />
                <br />
                {/* add Accordian for about that items */}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                      About this item
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {data.details.map((ele, i) => {
                        return (
                          <li
                            className="itemDetails"
                            style={{ marginBottom: "10px" }}
                          >
                            {ele}
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Item>
            </Grid>
          </Grid>
        ) : (
          <div>Data not availabe</div>
        )}
      </Box>
    </div>
  );
};

export default ProductDetails;
