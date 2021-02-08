import { GET_BIDS, DELETE_BID, ADD_BID } from "../actions/types.js";

const initialState = {
    bids: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BIDS:
            return {
                ...state,
                bids: action.payload
            };
        case DELETE_BID:
            return {
                ...state,
                bids: state.bids.filter(bid => bid.id !== action.payload)
            };
        case ADD_BID:
            return {
                ...state,
                bids: [...state.bids, action.payload]
            };
        default:
            return state;

    }
}