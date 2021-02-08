import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from '../../actions/items';





export class Form extends Component {


    state = {
        item_name: '',
        item_price: '',
        item_yield: '',
        item_thickness: '',
        labor_rate: '',
        item_total: '',
    };

    static PropTypes = {
        addItem: PropTypes.func.isRequired,
    }

    
    
    onChange = e => this.setState({ [e.target.name]: e.target.value });



    onSubmit = e => {
        e.preventDefault();
        const { item_name, item_price, item_yield, item_thickness, labor_rate, item_total } = this.state;
        const item = { item_name, item_price, item_yield, item_thickness, labor_rate, item_total };
        this.props.addItem(item);   
        this.setState({
            item_name: '',
            item_price: '',
            item_yield: '',
            item_thickness: '',
            labor_rate: '',
            item_total: '', 
        });
    };


   



  




    render() {    
        const { item_name, item_price, item_yield, item_thickness, labor_rate, item_total } = this.state;

       

        return (
            <div className="card card-body mt-5 mb-5">
                <h2>Add Item</h2>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="item_name"
                            onChange={this.onChange}
                            value={item_name}
                        />
                    </div>

                    <div className="form-group">
                        <label>Price</label>
                            <input
                                className="form-control"
                                type="text"
                                name="item_price"
                                onChange={this.onChange}
                                value={item_price}
                            />
                      
                    </div>

                    <div className="form-group">
                        <label>Thickness</label>
                        <input
                            className="form-control"
                            type="text"
                            name="item_thickness"
                            onChange={this.onChange}
                            value={item_thickness}
                        />
                    </div>

                    <div className="form-group">
                        <label>Yield</label>
                        <input
                            className="form-control"
                            type="text"
                            name="item_yield"
                            onChange={this.onChange}
                            value={item_yield}
                        />
                    </div>

                    <div className="form-group">
                        <label>Labor</label>
                        <input
                            className="form-control"
                            type="text"
                            name="labor_rate"
                            onChange={this.onChange}
                            value={labor_rate}
                        />
                    </div>

                    <div className="form-group">
                        <label>Item Total</label>
                        <input
                            className="form-control"
                            type="text"
                            name="item_total"
                            onChange={this.onChange}
                            value={item_total}                        // this needs to total the labor_rate and item_price
                        />
                    </div>

    




                    <div className="form-group">
                        <button type="submit" className="btn, btn-primary">
                            Submit
                        </button>
                        
                    </div>
                </form>
                
            </div>
        )
    }
}


export default connect(null,{ addItem })(Form);






