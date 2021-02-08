import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_BIDS, ADD_BID, DELETE_BID } from './types';


// GET BIDS        
export const getBids = () => (dispatch, getState) => {
    axios.get("/api/bid/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: GET_BIDS,
            payload: res.data
        });
    }).catch(err => console.log(err));
};

// DELETE BID
export const deleteBid = (id) => (dispatch, getState) => {
    axios.delete(`/api/bid/${id}/`, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ deleteBid: 'Bid Item Deleted'}));
        dispatch({
            type: DELETE_BID,
            payload: id
        });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// ADD BID
export const addBid = (bid) => (dispatch, getState) => {
    axios.post("/api/bid/", bid, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addBid: 'Bid Item Added'}));
        dispatch({
            type: ADD_BID,
            payload: res.data
        });
    })
    // Catches error from server and dispatches
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
    
};