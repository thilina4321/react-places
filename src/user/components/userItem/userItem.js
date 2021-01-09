import React from "react";
import { Card, Button } from "@material-ui/core";
import classes from "./userItem.module.css";
import { useHistory } from "react-router-dom";

const UserItem = (props) => {
  const history = useHistory();

  return (
    <div>
      <Card color="green" className={classes.card}>
        <img
          className={classes.img}
          src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg"
          alt="am"
        />

        <div className={classes.details}>
          <h2 className={classes.cardItem}> I'm {props.name} </h2>
          <h4 style={{ color: "grey" }} className={classes.cardItem}>
            
            I have 3 places
          </h4>
          <Button
            onClick={() => history.push(`/profile/${props.id}`)}
            variant="outlined"
            color="secondary"
          >
            
            Visit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserItem;
