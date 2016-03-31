import React, { Component } from 'react';

export default class UserslistItem extends Component {
	constructor(props){
		super(props);

		this.state = { isEditing: false };

		this.onEditClick = this.onEditClick.bind(this);
		this.onCancelClick = this.onCancelClick.bind(this);
		this.onSaveClick = this.onSaveClick.bind(this);
	}

	onEditClick(){
		this.setState({ isEditing: true });
	}

	onCancelClick(){
		this.setState({ isEditing: false });
	}

	onSaveClick(event){
		event.preventDefault();
		const oldUser = [
			{
				name:this.props.name,
				address:this.props.address,
				contact:this.props.contact,
				email:this.props.email,
				username:this.props.username,
				password:this.props.password,
				id:this.props.id,
			}
		 ];
		const newUser = [
			{
				name: this.refs.editName.value,
				address: this.refs.editAddress.value,
				contact: this.refs.editContact.value,
				email: this.refs.editEmail.value,
				username: this.refs.editUsername.value,
				password: this.refs.editPassword.value,
				id:this.props.id,
			 }
		];
		// console.log('old user is', oldUser);
		// console.log('new user is', newUser);
		this.props.saveUser( ...oldUser, ...newUser );
		this.setState({ isEditing: false });
	}

	renderUserSection(){
		const { name, address, contact, email, username, password } = this.props;
		if ( this.state.isEditing ){
	      return(
	          <div>
	            <form onSubmit = { this.onSaveClick } >
					  <fieldset className="form-group">
					  	<label htmlFor="name">Name</label>
					    <input type="text" className="form-control" id="name" defaultValue = {name} placeholder="enter name of client" ref="editName" />
					  </fieldset>
					  <fieldset className="form-group">
					  	<label htmlFor="name">Address</label>
					    <input type="text" className="form-control" id="address" defaultValue = {address} placeholder="enter address" ref="editAddress" />
					  </fieldset>
					  <fieldset className="form-group">
					  	<label htmlFor="name">Contact</label>
					    <input type="text" className="form-control" id="contact" defaultValue = {contact} placeholder="enter contact" ref="editContact" />
					  </fieldset>
					  <fieldset className="form-group">
					  	<label htmlFor="name">Email</label>
					    <input type="text" className="form-control" id="email" defaultValue = {email} placeholder="enter email" ref="editEmail" />
					  </fieldset>
					  <fieldset className="form-group">
					  	<label htmlFor="name">Username</label>
					    <input type="text" className="form-control" id="username" defaultValue = {username} placeholder="enter username" ref="editUsername" />
					  </fieldset>
					  <fieldset className="form-group">
					    <label htmlFor="password">Password</label>
					    <input type="text" className="form-control" id="password" defaultValue = {password} placeholder="enter password" ref="editPassword" />
					  </fieldset>
				</form>
	          </div>
	        );
	    }
		return(
				<div className="userDetail">
					<h4 className="card-title">Name: { name }</h4>
					<h4 className="card-title">Contact: { contact }</h4>
					<h4 className="card-title">Address: { address }</h4>
					<h4 className="card-title">Email: { email }</h4>
					<h4 className="card-title">Username: { username }</h4>
					<h4 className="card-title">Password: { password }</h4>
				</div>
			);
	}

	renderActionSection(){
		if(this.state.isEditing){
			return(
					<div className = "buttons">
						<button className="btn btn-warning" onClick = { this.onSaveClick } >Save</button>
						<button className="btn btn-danger" onClick = { this.onCancelClick } >Cancel</button>
					</div>
				);

		}

		return(
				<div className = "buttons">
					<button className="btn btn-warning" onClick = { this.onEditClick }>Edit</button>
					<button className="btn btn-danger" onClick = { this.props.deleteUser.bind(this, this.props.id) }>Delete</button>
				</div>
			);

	}

	render() {
		return (
			<div className = "container" >
				<div className="row">
					<div className="col-md-4">
						<div className="card card-block">
							 { this.renderUserSection() }
							{ this.renderActionSection() }
						</div>
					</div>
				</div>
			</div>
		);
	}
}
