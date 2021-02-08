import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomers, deleteCustomer } from '../../actions/customers';



export class Customers extends Component {
    static PropTypes = {
        customers: PropTypes.array.isRequired,
        getCustomers: PropTypes.func.isRequired,
        deleteCustomer: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getCustomers();
    }

    render() {
        return (
            <Fragment>
                <h2>Customers</h2>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Business Name</th>
                                <th>Phone Number</th> 
                                <th>Email</th>
                                <th>Address</th>
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            { this.props.customers.map(customer => (
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.customer_name}</td>
                                    <td>{customer.company_name}</td>
                                    <td>{customer.phone_num}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address}</td>

                                    <td><button onClick={this.props.deleteCustomer.bind(this, customer.id)} 
                                    className="btn btn-danger btn-sm">Delete</button></td>
                                    
                                </tr>
                            ))}

                        </tbody>
                    </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    customers: state.customers.customers
});

export default connect(mapStateToProps, { getCustomers, deleteCustomer })(Customers);
