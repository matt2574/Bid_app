import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_CUSTOMERS, DELETE_CUSTOMER, ADD_CUSTOMER } from './types';


// GET CUSTOMERS
export const getCustomers = () => (dispatch, getState) => {
    axios.get("/api/customer/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_CUSTOMERS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

// DELETE CUSTOMERS
export const deleteCustomer = (id) => (dispatch, getState) => {
    axios.delete(`/api/customer/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteCustomer: 'Customer Deleted'}));
        dispatch({
            type: DELETE_CUSTOMER,
            payload: id
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD CUSTOMER
export const addCustomer = (customer) => (dispatch, getState) => {
    axios.post("/api/customer/", customer, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addCustomer: 'Customer Added'}));
        dispatch({
            type: ADD_CUSTOMER,
            payload: res.data
        });
    })
    // Catches error from server and dispatches
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    
};