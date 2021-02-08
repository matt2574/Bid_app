import React, { Component, Fragment } from 'react';
import { withAlert } from "react-alert";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static PropTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if(error.msg.customer_name) alert.error(`Name: ${error.msg.customer_name.join()}`);
            if(error.msg.company_name) alert.error(`Company : ${error.msg.company_name.join()}`);
            if(error.msg.phone_num) alert.error(`Phone number: ${error.msg.phone_num.join()}`);
            if(error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
            if(error.msg.address) alert.error(`Address: ${error.msg.address.join()}`);
            if(error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if(error.msg.username) alert.error(error.msg.username.join());
            
        }

        if(message !== prevProps) {
            if(message.deleteCustomer) alert.success(message.deleteCustomer);
            if(message.addCustomer) alert.success(message.addCustomer);
            if(message.passwordNotMatch) alert.error(message.passwordNotMatch);
            
        }
    }
    render() {
        return <Fragment />;
                
    }
}
const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));

