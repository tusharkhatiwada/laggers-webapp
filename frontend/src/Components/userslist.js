import _ from 'lodash';
import React, { Component } from 'react';
import UserslistItem from './users-list-item';

export default class Userslist extends Component {
	renderList(){
		const props = _.omit(this.props, 'userInfo' );
		return _.map(this.props.userInfo, (user, index) => <UserslistItem key = {index} {...user} { ...props } /> );
	}

	render() {
		return (
			<div>
				{ this.renderList() }
			</div>
		);
	}
}
