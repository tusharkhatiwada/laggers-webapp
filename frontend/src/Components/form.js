import React, { Component } from 'react';

export default class FormBox extends Component {
	handleSubmit(event){
		event.preventDefault();
		let user = [
			{
				name: event.target.elements.username.value,
				contact:event.target.elements.contact.value,
				address:event.target.elements.address.value,
				email:event.target.elements.email.value,
				username:event.target.elements.username.value,
				password:event.target.elements.password.value
			 }
		];
		// console.log(...user);
		this.props.createUser(...user);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<form onSubmit = { this.handleSubmit.bind(this) } >

							  <fieldset className="form-group">
							    <label htmlFor="name">Name</label>
							    <input type="text" className="form-control" id="name" placeholder="enter name of client" />
							  </fieldset>
							  <fieldset className="form-group">
							    <label htmlFor="address">Addess</label>
							    <input type="text" className="form-control" id="address" placeholder="enter address" />
							  </fieldset>
							  <fieldset className="form-group">
							    <label htmlFor="contact">Contact</label>
							    <input type="text" className="form-control" id="contact" placeholder="enter contact" />
							  </fieldset>
							  <fieldset className="form-group">
							    <label htmlFor="email">Email</label>
							    <input type="text" className="form-control" id="email" placeholder="enter email" />
							  </fieldset>
							  <fieldset className="form-group">
							    <label htmlFor="username">Username</label>
							    <input type="text" className="form-control" id="username" placeholder="enter username" />
							  </fieldset>
							  <fieldset className="form-group">
							    <label htmlFor="password">Password</label>
							    <input type="text" className="form-control" id="password" placeholder="enter password" />
							  </fieldset>

							<button className="btn btn-primary"> Submit </button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

