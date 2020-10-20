import React from 'react';
import './App.css';
import update_Person from './store/actions/personActions'
import update_Game from './store/actions/gameActions'
import { connect } from 'react-redux';
import fetch_user from './store/actions/userActions'

// function updatePerson() {
//   store.dispatch(update_Person)
// }
// function updateGame() {
//   store.dispatch(update_Game)
// }


function App(props) {
  return (
    <div className="App">
      <h1>
        Redux Tutorials
      </h1>
      Person Name : {props.person.name}
      <br />
      <button
        onClick={props.updatePerson}
      >
        Change Name
      </button>
      <br />
      Game Name : {props.game.name}
      <br />
      <button
        onClick={props.updateGame}
      >Change Game
      </button>
      <br />
      Users:
      <button onClick={props.fetchUsers}>
        Fetch Users
      </button>
      {
        props.users.length === 0 ? <p>No User found</p> : props.users.map(user => <p>{user.id} - {user.first_name} - {user.email}</p>)
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    game: state.game,
    person: state.person,
    user: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateGame: () => { dispatch(update_Game) },
    updatePerson: () => { dispatch(update_Person) },
    fetchUsers: () => { dispatch(fetch_user) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
