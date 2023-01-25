import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Stack from "@mui/material/Stack";
import {
  Button,
  Card,
  CardActions /* E:/Nov14 Fantasy Project/fantasy-project-nov-14/src/assets/images/homeFurnishing/bed images/MaroonBedImages/Image1.jpg */,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link, useLocation } from "react-router-dom";
//import "./Products.css";
/* added animation for a image */
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productSlice";
/* animation code for image */
const customTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
  },
});
/* animation code for image */

const StyledImage = styled(Paper)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.3);
  }
  `}
`;

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location.pathname.split(""));
  useEffect(() => {
    if (location.pathname) {
      const filterBytext = location.pathname.split("/")[2];
      console.log(filterBytext);
      dispatch(fetchProducts());
      // api call to filter details based on selected menu value
    }
  }, [location.pathname]);

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems={"center"}
        sx={{ marginLeft: "auto" }}
      >
        {products &&
          products.map((item, i) => (
            <Grid item xs={12} sm={4} xl={3} md={3} lg={3} key={i}>
              {/*  <HomeFurnish item={item} /> */}
              <Divider />
              <Link to={`/product-details/${item.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                  <ThemeProvider theme={customTheme}>
                    <StyledImage>
                      <CardMedia
                        component="img"
                        height="300"
                        //image="/logo192.png"
                        image={item.path[0]}
                        alt="green iguana"
                      />
                    </StyledImage>
                  </ThemeProvider>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title.length > 20
                        ? `${item.title.substring(0, 20)}...`
                        : item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description.length > 50
                        ? `${item.description.substring(0, 50)}...`
                        : item.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
          <Button size="small">Add to Cart</Button>
          <Button size="small">Buy Now</Button>
        </CardActions> */}
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <CardActions>
                    <Typography>Rs.{item.price}</Typography>

                    <Button size="small" sx={{ margin: "auto" }}>
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}

        {!products && <div>Data not availabe</div>}
      </Grid>
    </>
  );
};

export default Products;
