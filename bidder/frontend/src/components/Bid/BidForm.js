import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBid } from '../../actions/bid';





export default connect(null, { addBid })(Form);