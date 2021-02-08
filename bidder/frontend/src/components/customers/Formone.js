
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCustomer } from '../../actions/customers';


export class Form extends Component {

    static PropTypes = {
        addCustomer: PropTypes.func.isRequired
    }



    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onSubmit(values) {
        
        return this.props.addCustomer(values);
        
     }
       
        
    



    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <label>Name</label>
                    <Field name="customer_name" placeholder="name" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Company Name</label>
                    <Field name="company_name" placeholder="company" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Phone number</label>
                    <Field name="phone_num" placeholder="phone number" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Email</label>
                    <Field name="email" placeholder="email" type="email" component="input"></Field>
                </div>
                <div>
                    <label>Address</label>
                    <Field name="address" placeholder="address" type="text" component="input"></Field>
                </div>
                <button type="submit">Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
            
        )
    }
}

const formData = {
    form: 'demo'
};
const connected = connect(null, { addCustomer })(Form);

export default reduxForm(formData)(connected);








