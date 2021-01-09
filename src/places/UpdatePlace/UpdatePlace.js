import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../shared/validators/validator";
import renderField from '../../shared/renderField'
import classes from "../NewPlace/NewPlace";
import { Button, Card } from "@material-ui/core";


const UpdatePlace = (props) => {

    const onSubmit = (value)=>{
        console.log(value);
    }

  const { handleSubmit } = props;
  return (
      <Card style={{width:'80%',marginBottom:'20px', marginTop:'20px', margin:'20px auto'}}>
    <h1> Edit page </h1>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Field className={classes.input}
        name="title"
        type="text"
        component={renderField}
        label="Title"
      />
      <Field className={classes.input} name="description" type="text" component={renderField} label="Description" />
      <Field className={classes.input} name="address" type="text" component={renderField} label="Address" />
      <div style={{textAlign:'end'}}>
        <Button type="submit">
          Submit
        </Button>
        
      </div>
    </form>
    </Card>
  );
};

export default reduxForm({
  form: "UpdatePlace",
  validate,
})(UpdatePlace);
