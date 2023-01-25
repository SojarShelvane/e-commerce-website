import React from "react";
import { Paper } from "@mui/material";
import slider1 from "E:/Nov14 Fantasy Project/e-commerce-11janproject/src/assets/images/bannerSliderImages/slider1.jpg";
import slider3 from "E:/Nov14 Fantasy Project/e-commerce-11janproject/src/assets/images/bannerSliderImages/slider3.jpg";
import slider4 from "E:/Nov14 Fantasy Project/e-commerce-11janproject/src/assets/images/bannerSliderImages/slider4.jpg";
import Carousel from "react-material-ui-carousel";

const HomeCrousal = () => {
  var items = [
    {
      path: slider1,
    },

    {
      path: slider3,
    },
    {
      path: slider4,
    },
  ];

  return (
    <>
      <Carousel
        indicatorContainerProps={{
          style: {
            marginTop: "50px", // 5
          },
        }}
        animation={"slide"}
      >
        {items.map((item, i) => (
          <Paper
            key={i}
            xs={2}
            sx={{
              backgroundImage: `url(${item.path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "550px",
            }}
          ></Paper>
        ))}
      </Carousel>
      <br />
      <br />
    </>
  );
};

export default HomeCrousal;
