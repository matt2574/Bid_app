import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBids, deleteBid } from '../../actions/bid';



export class Bids extends Component {
    static PropTypes = {
        bids: PropTypes.array.isRequired,
        getBids: PropTypes.func.isRequired,
        deleteBid: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getBids();
    }

    render() {
        return (
            <Fragment>
                




                
            </Fragment>
        )
    } 
}

const mapStateToProps = state => ({
    bids: state.bids.bids
});

export default connect(mapStateToProps, { getBids, deleteBid })(Bids);