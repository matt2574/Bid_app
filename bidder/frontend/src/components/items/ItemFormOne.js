
import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector, change } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../../actions/items';


export class Form extends Component {

    static PropTypes = {
        addCustomer: PropTypes.func.isRequired
    }



    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(values) {
        
        return this.props.addItem(values);
        
     }
       


    render() {
        const renderField = ({ input, label, type, meta: { touched, error } }) => (
            <div>
              <label>{label}</label>
              <div>
                <input {...input} type={type} placeholder={label}/>
                {touched && error && <span>{error}</span>}
              </div>
            </div>
          )


        const { handleSubmit, pristine, reset, submitting } = this.props;

       


        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div>
                    <label>Item</label>
                    <Field name="item_name" placeholder="name" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Price</label>
                    <Field name="item_price" placeholder="price" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Thickness</label>
                    <Field name="item_thickness" placeholder="thickness" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Yield</label>
                    <Field name="item_yield" placeholder="yield" type="text" component="input"></Field>
                </div>
                <div>
                    <label>Labor</label>
                    <Field name="labor_rate" placeholder="labor" type="text" component="input"></Field>
                </div>


                {/* This will be labor_rate + item_price */}
                <div>
                    <label>Total</label>
                    <Field name="item_total" placeholder="total" type="text" component="input"></Field>       
                </div>                                                                                              
    
               
                <button type="submit">Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
            
        )
    }
}



const formData = {
    form: 'item'
};


const connected = connect(null, { addItem })(Form);

export default reduxForm(formData)(connected);