import React from "react";
import { Field, formValues, reduxForm } from "redux-form";

class StreamCreate extends React.Component {

renderError({error, touched }){
    if(touched && error){
        return(
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )

    }

}

  renderInput= ({input, label, meta}) => {
    console.log(meta);
    const className=`field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
      <label>{label}</label>
        <input
        {...input}
        autoComplete='off'
        
        //   onChange={formProps.input.onChange}
        //   value={formProps.input.value}
        />
        {/* <div>{meta.error}</div> */}
        {this.renderError(meta)}
      </div>
    );
  }

onSubmit(formValues){
    //event.preventDefault();
    console.log(formValues)
}

  render() {
    //console.log(this.props);

    return (
      <div className="container">
        StreamCreate
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}className="ui form error">
          <Field name="title" component={this.renderInput} label='Enter Title' />
          <Field name="description" component={this.renderInput} label ='Enter description' />
          <button className="ui button primary" >Submit</button>
        </form>
      </div>
    );
  }
}

const validate=(formValues)=>{
    const errors ={};
    if(!formValues.title){
        errors.title="Please enter Title.";
        //only when user did not enter title
    }
    if(!formValues.description){
        errors.description ="You have to enter Description!";

    }
    return errors;
}

export default reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);
