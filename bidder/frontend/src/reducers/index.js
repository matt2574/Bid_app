import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import customers from './customers';
import items from './items';
import bids from './bid';
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";

const initialUserState = {
    firstName: '',
    lastName: ''
  };

export default combineReducers({
    customers,
    items,
    bids,
    errors,
    messages,
    auth,
    form: formReducer
});
