import { Button, Card, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import renderField from "../../shared/renderField";
import classes from "../../places/NewPlace/NewPlace.module.css";
import validate from "../../shared/validators/validator";
import * as actionType from "../../store/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  const [login, setlogin] = useState(true);
  const dispatch = useDispatch();

  const isAuth = useSelector(state => state.auth.token)

  const onSubmit = (value) => {
    if (login) {
      dispatch(
        actionType.auth(login, { email: value.email, password: value.password })
      );
    } else {
      dispatch(
        actionType.auth(login, {
          email: value.email,
          password: value.password,
          userName: value.userName,
        })
      );
      value.userName = "";
    }
    value.email = "";
    value.password = "";
  };

  let redirect
  if(isAuth){
    redirect = <Redirect to="/"/>
  }

  const { handleSubmit } = props;
  return (
    <div>
    {redirect}
    <Card
      style={{
        width: "60%",
        marginBottom: "20px",
        textAlign: "center",
        marginTop: "20px",
        margin: "20px auto",
      }}
    >
      <h1> {login ? "Login" : "Sign up"} Required </h1>
      <Divider />
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {!login && (
          <Field
            className={classes.input}
            name="userName"
            type="text"
            component={renderField}
            label="User Name"
          />
        )}
        <Field
          className={classes.input}
          name="email"
          type="text"
          component={renderField}
          label="Email"
        />
        <Field
          className={classes.input}
          name="password"
          type="text"
          component={renderField}
          label="Password"
        />
        <div style={{ textAlign: "end" }}>
          <Button type="submit">{login ? "Login" : "Sign up"}</Button>
        </div>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {login && (
          <Button color="primary" onClick={() => setlogin(false)}>
            {" "}
            Switch to Sign up{" "}
          </Button>
        )}
        {!login && (
          <Button color="primary" onClick={() => setlogin(true)}>
            {" "}
            Switch to Login{" "}
          </Button>
        )}
      </div>
    </Card>
    </div>
  );
};

export default reduxForm({
  form: "Auth",
  validate,
})(Auth);
