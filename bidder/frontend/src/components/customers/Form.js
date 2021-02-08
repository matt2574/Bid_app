import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCustomer } from '../../actions/customers';



export class Form extends Component {
    state = {
        customer_name: '',
        company_name: '',
        phone_num: '',
        email: '',
        address: '',
    };

    static PropTypes = {
        addCustomer: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { customer_name, company_name, phone_num, email, address } = this.state;
        const customer = { customer_name, company_name, phone_num, email, address };
        this.props.addCustomer(customer);   
        this.setState({
            customer_name: '',
            company_name: '',
            phone_num: '',
            email: '',
            address: '' 
        });
    };


    render() {
        const { customer_name, company_name, phone_num, email, address } = this.state;
        return (
            <div className="card card-body mt-5 mb-5">
                <h2>Add Customer</h2>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="customer_name"
                            onChange={this.onChange}
                            value={customer_name}
                        />
                    </div>

                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="company_name"
                            onChange={this.onChange}
                            value={company_name}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            className="form-control"
                            type="text"
                            name="phone_num"
                            onChange={this.onChange}
                            value={phone_num}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="text"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>
                        <input
                            className="form-control"
                            type="text"
                            name="address"
                            onChange={this.onChange}
                            value={address}
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

export default connect(null, { addCustomer })(Form);
