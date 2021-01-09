import { Card, Divider } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const { userId } = useParams();
  const [places, setplaces] = useState([]);
  console.log(userId);

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        const data = await axios.get(
          "http://localhost:3001/user/profile/" + userId
        );
        console.log(data.data);
        setplaces(data.data.places);
      };
      fetchData();
    }
  }, [userId]);

  return (
    <div className={classes.profile}>
      <img
        className={classes.image}
        src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg"
        alt="a"
      />
      <div className={classes.user__data}>
        <h2> Thilina Dilshan </h2>
        <p> Thlina@gmail.com </p>
      </div>

      <div className={classes.user__places}>
        User Places
        <Divider />
        {places.map((place) => {
          const { _id, title, description, address } = place;
          return (
            <Card key={_id} className={classes.place}>
              <img
                className={classes.pro_img}
                src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg"
                alt="a"
              />
              <p className={classes.p}>{title}</p>
              <p className={classes.p}>{description}</p>
              <p className={classes.p}>{address}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
