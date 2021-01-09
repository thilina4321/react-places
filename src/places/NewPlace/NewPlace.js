import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../shared/validators/validator";
import renderField from '../../shared/renderField'
import classes from "./NewPlace.module.css";
import { Button, Card } from "@material-ui/core";
import axios from "axios";
import { useSelector } from "react-redux";

const NewPlace = (props) => {

  const token = useSelector(state=>state.auth.token)

    const onSubmit = async(value)=>{
        console.log(value);
        const {title,description,address} = value
        try {
          const data = await axios.post('http://localhost:3001/place/new',
           {title,description,address},{
            headers:{"Authorization":`Bearer ${token}`}
          })
          console.log(data);
        } catch (error) {
          console.log(error);
        }
    }

  const { handleSubmit } = props;
  return (
      <Card style={{width:'80%',marginBottom:'20px', marginTop:'20px', margin:'20px auto'}}>
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
  form: "NewPlace",
  validate,
})(NewPlace);
