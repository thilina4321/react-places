import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionType from '../../store/actions/AuthAction'

const Logout = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch()
  console.log(token);

  useEffect(()=>{
    dispatch(actionType.logout())
  },[dispatch])

  let redirect = <Redirect to="/" />;
  if (!token) {
    redirect = <Redirect to="/auth" />;
  }

  

  return <div>{redirect}</div>;
};

export default Logout;
