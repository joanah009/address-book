import React, { Component } from 'react';
import './App.css';
import PeopleList from './PeopleList/PeopleList';
import AddPerson from './addPerson/addPerson';

class App extends Component {
  state = {
    people: [
      {firstName: "Test User1", lastName: "Test User1", phone: "123456789", address: "Makati City, Philippines", email: "email@gmail.com"},
      {firstName: "Test User2", lastName: "Test User2", phone: "123456789", address: "Las Pinas City, Philippines", email: "email@yahoo.com"},
      {firstName: "Test User3", lastName: "Test User3", phone: "123456789", address: "Makati City, Philippines", email: "email@gmail.com"}
      
    ]
  }

  addPerson(person) {
    let people = this.state.people;
    people.push(person);
    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div className="App homepage">
        <section className="sec-1 col-12 px-0 py-0 my-5">

         <div className="container">
         <h2 className="pt-5 pb-4">Address Book</h2>
          <div className="row">
            <div className="col-xl-6 col-md-12 col-sm-12 col-12">
              <h3>Add Information</h3>
              <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
            </div>

            <div className="col-xl-6 col-md-12 col-sm-12 col-12">
              <h3>Information Lists</h3>
                <div className="information-list pt-2 pl-1 pr-4 mt-4">
                  <PeopleList people={this.state.people} />
                </div>
            </div>

          </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
