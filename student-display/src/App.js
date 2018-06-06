import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Student from './components/student'

class App extends Component {
  constructor(){
    super()
    this.state = {
      students: []
    }
  }
  handleLogin(){
    axios.get('/login')
  }
  handleGetStudents(){
    axios.get('/students').then( res => {
      this.setState({
        students: res.data
      })
    })
  }
  render() {
    let mappedStudents = this.state.students.map(student => {
      return(
        <Student 
        key={student.id}
        name={student.student}
        email={student.email_address}
        phone={student.phone}
        grade={student.current_grade}
        />
      )
    })
    return (
      <div className="App">
        <a href="http://localhost:3005/login">
          <button>Login</button>
        </a>
        <button onClick={() => this.handleGetStudents()}>Get Students</button>
        {mappedStudents}
      </div>
    );
  }
}

export default App;
