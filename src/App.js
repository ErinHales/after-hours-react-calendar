import React, { Component } from 'react';
import Form from './Form'
import './App.css';

class App extends Component {
  constructor() {
    super()

    let monthDays = {
      Jan: 31,
      Feb: 28,
      Mar: 31,
      Apr: 30,
      May: 31,
      Jun: 30,
      Jul: 31,
      Aug: 31,
      Sep: 30,
      Oct: 31,
      Nov: 30,
      Dec: 31
    }

    let days = []

    for(let month in monthDays) {
      for(let i=1; i<=monthDays[month]; i++) {
        let day ={
          month: month,
          day: i,
        }

        days.push(day)
      }
    }

    this.state = {
      days:days
    }
  }

  addAppointment = (index, appointmentText) => {
    let newArray = this.state.days.slice()

    newArray[index].appt = appointmentText
    this.setState({
      days: newArray
    })

  }
  
  render() {

    let styles = {
      height: 150,
      width: 150,
      border: '2px solid black'
    }
    let displayDays = this.state.days.map( (day, i) => {

      let appointment = day.appt ? <p> { day.appt } </p> : null

      return(
        <div style={ styles } key={ day.month + day.day }>   { `${day.month} - ${day.day}` } 
          { appointment }
        </div>
      )
    })

    return (
      <div>
        <Form 
          dateOptions={ this.state.days } 
          updateFn={ this.addAppointment } />

        <div className='cal'>
          { displayDays }
        </div>
      </div>
    );
  }
}

export default App;
