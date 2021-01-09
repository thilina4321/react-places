import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import classes from './Navigation.module.css'
import {use, useHistory} from 'react-router-dom'

const Mobile = () => {
  const list = ["All Users", "My places", "Add places", "AUthenticate"];
  const [open, setOpen] = useState(false);
  const history = useHistory()

  const sideDrawerClose = (li)=>{
    history.push('/places/u1')
    setOpen(false)

  }

  const sidebat = (
    <List>
      {list.map((li) => {
        return (
          <ListItem key={li}>
          <Button onClick={()=>sideDrawerClose(li)}>
          <ListItemIcon>
          <Menu />
          </ListItemIcon>
          <ListItemText primary={li} />
          </Button>
          </ListItem>
        );
      })}
    </List>
  );
  return (
    <div className={classes.mobile}>
      <Button onClick={() => setOpen(true)}>
        <Menu />
      </Button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        {sidebat}
      </Drawer>
    </div>
  );
};

export default Mobile;
