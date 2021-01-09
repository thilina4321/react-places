import React from "react";
import classes from "./Navigation.module.css";

import Mobile from "./Mobile";
import Desktop from "./Desktop";

const Navigation = () => {
  return (
    <div className={classes.toolbar}>
      <Mobile className/>

      <h3 className={classes.logo}> Logo </h3>
      <Desktop/>
    </div>
  );
};

export default Navigation;
