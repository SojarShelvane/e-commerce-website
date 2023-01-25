import { Fade, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeCrousal from "../home/HomeCrousal";

const NavbarSub = ({ menus }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Typography
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          my: 2,
          color: "black",
          display: "block",
          fontSize: "20px",
        }}
      >
        {menus.name}
      </Typography>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menus.subMenus &&
          menus.subMenus.map((ele, i) => {
            return ele.subMenus === null ? (
              <>
                <MenuItem onClick={handleClose} key={i}>
                  <Link to={ele.path}>{ele.name}</Link>
                </MenuItem>
              </>
            ) : (
              <>
                <NavbarSub key={i} menus={ele} />
              </>
            );
          })}
      </Menu>
    </div>
  );
};

export default NavbarSub;
