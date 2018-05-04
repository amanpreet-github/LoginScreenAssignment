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
		facebookLogin: () => {
			dispatch({
				type: actions.commonActions.FACEBOOK_LOGIN,
			});
		},
		googleLogin: () => {
			dispatch({
				type: actions.commonActions.GOOGLE_LOGIN,
			});
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
