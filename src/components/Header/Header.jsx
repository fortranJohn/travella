import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

const Header = ({ setCoordinates }) => {
  const [autoComplete, setAutoComplete] = useState(null);
  const classes = useStyles();

  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.navLogo}>
            <ExploreOutlinedIcon
              className={classes.logoIcon}
              styles={{ color: "white", margin: "20px" }}
            />
            <Typography variant="h5" className={classes.title}>
              Travella
            </Typography>
          </div>

          <Box display="flex">
            <Typography variant="h6" className={classes.title}>
              Explore with us
            </Typography>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Autocomplete>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
