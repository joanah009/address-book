import React, { Component } from 'react';
import avatar from './avatar.png';

class Person extends Component {

  render() {
    return (
	<div className="information py-3 mb-4">
    	<figure className="avatar"><img className="" src={avatar} /></figure>
	      <ul>
			<li>First Name: <span>{this.props.person.firstName}</span></li>
			<li>Last Name: <span>{this.props.person.lastName}</span></li>
			<li>Phone Number: <span>{this.props.person.phone}</span></li>
			<li>Address: <span>{this.props.person.address}</span></li>
			<li>Email Address: <span>{this.props.person.email}</span></li>
	      </ul>

      </div>
    );
  }
}

export default Person;

