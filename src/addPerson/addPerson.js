import React, { Component } from 'react';

class AddPerson extends Component {

  componentWillMount() {
    this.setState({
      firstName: "",
      lastName: "",
      phone: ""
    });
  }


  submit(e) {
    e.preventDefault();
    this.props.addPerson(this.state);
    e.target.reset();
  }

  info(event) {
    let state = this.state;
    let name = event.target.name;
    state[name] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
		 <div className="add py-4">
			<form onSubmit={this.submit.bind(this)}>
				<div className="info">
					<label>First Name: </label>
					<input type="text"
					 name="firstName"
					 value={this.props.firstname}
					 onChange={this.info.bind(this)}
					 required />
				</div>

				<div className="info">
					<label>Lastname: </label>
					<input type="text"
					name="lastName"
					value={this.props.lastname}
					onChange={this.info.bind(this)}
					required />
				</div>

				<div className="info">
					<label>Phone Number: </label>
					<input type="tel"
					 name="phone"
					 value={this.props.phone}
					 onChange={this.info.bind(this)}
					required />
				</div>

				<div className="info">
					<label>Address: </label>
					<input type="test"
					 name="email"
					 value={this.props.address}
					 onChange={this.info.bind(this)}
					required />
				</div>

				<div className="info">
					<label>Email: </label>
					<input type="email"
					 name="email"
					 value={this.props.email}
					 onChange={this.info.bind(this)}
					required />
				</div>

				<div className="btn-submit">
				  <button type="submit">Add</button>
				</div>
			</form>
		</div>
    );
  }
}

export default AddPerson;