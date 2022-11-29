import React, { Component } from 'react';
import Clock from './clock';
import './App.css';
import { FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2022',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({deadline: this.state.newDeadline});
    }

    render() {
        return (
            <div className="App"> 
                <div className='App-title'>Countdown to {this.state.deadline} </div>
                <Clock deadline={this.state.deadline}/>
                <div className="Test">
                    <FormControl className="Deadline-input" onChange={event => this.setState({newDeadline: event.target.value})} placeholder="new date" />
                    <Button onClick={() => this.changeDeadline()}> Submit</Button>
                </div>
            </div>
        )
    }
}

export default App;