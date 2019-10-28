import React, { Component } from 'react';
import Person from '../Person/Person';


class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div className="people-list pb-4">
          {this.props.people.map((person)=> {
            return <Person person={person} />
          })}
      </div>

    );
  }
}

export default PeopleList;

