import React, { useState } from "react";
import { Button, Card, Dialog, Divider } from "@material-ui/core";

import classes from "./MyPlaceItem.module.css";
import { useHistory, useParams } from "react-router-dom";

const MyPlaceItem = (props) => {

  const { title, description, address } = props;
  const [open, setOpen] = useState(false);
  const [openDelete, setopenDelete] = useState(false);

  const {placeId} = useParams()
  const history = useHistory()

  return (
    <Card className={classes.myplace}>
      <img
        className={classes.img}
        alt="a"
        src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg"
      />
      <h2> {title} </h2>
      <h3> {address} </h3>
      <h5> {description} </h5>
      <Divider />
      <Dialog
        fullWidth
        className={classes.map}
        open={open}
        onClose={() => setOpen(false)}
      >
          <h2 className={classes.address}> {address} </h2>
          <Button onClick={() => setOpen(false)}> Close </Button>
      </Dialog>
      <Button onClick={() => setOpen(true)}> View on Map </Button>
      <Button onClick={()=>history.push('/place/'+placeId)}> Edit </Button>
      <Button onClick={() => setopenDelete(true)}> Delete </Button>

      <Dialog
        fullWidth
        className={classes.map}
        open={openDelete}
        onClose={() => setOpen(false)}
      >
          <h2> Do you really want to delete </h2>
          <div style={{display:'flex', justifyContent:'center'}}>
          <Button onClick={() => setopenDelete(false)}> No </Button>
          <Button onClick={() => setopenDelete(false)}> Yes </Button>
          </div>
      </Dialog>

    </Card>
  );
};

export default MyPlaceItem;
