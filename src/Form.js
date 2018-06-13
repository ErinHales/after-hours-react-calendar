import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()

        this.state = {
            dropdown: 0,
            input: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    makeAppt = () => {
        let ind = parseInt(this.state.dropdown)
        let text = this.state.input

        this.props.updateFn(ind, text)

        this.setState({
            dropdown: 0,
            input: ''
        })
    }

    render() {

        let dayOptions = this.props.dateOptions.map( (day, i) => {
            return(
                <option value={i}> { `${day.month}-${day.day}` } </option>
            )
        })

        return (
            <div>
                <select
                    name='dropdown'
                    value={ this.state.dropdown }
                    onChange={ this.handleInput }>
                    { dayOptions }
                </select>

                <input type="text"
                    value={ this.state.input }
                    onChange={ this.handleInput }
                    name='input'/>
                <button
                    onClick={ this.makeAppt } > Submit </button>
            </div>
        )
    }
}
