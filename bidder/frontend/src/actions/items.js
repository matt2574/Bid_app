import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from './types';


// GET Items
export const getItems = () => (dispatch, getState) => {
    axios.get("/api/item/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_ITEMS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

// DELETE Item
export const deleteItem = (id) => (dispatch, getState) => {
    axios.delete(`/api/item/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteItem: 'Item Deleted'}));
        dispatch({
            type: DELETE_ITEM,
            payload: id
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD Item
export const addItem = (item) => (dispatch, getState) => {
    axios.post("/api/item/", item, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addItem: 'Item Added'}));
        dispatch({
            type: ADD_ITEM,
            payload: res.data
        });
    })
    // Catches error from server and dispatches
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    
};
