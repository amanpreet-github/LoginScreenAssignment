import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from '@screen/Onboard/Login';
import actions from '@modules';

const mapStateToProps = state => {
	return {
		authToken: state.commonReducer.authToken,
	};
};

const mapDispatchToProps = dispatch => {
	return {
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
