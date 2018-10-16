import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TimeTracker from './components/TimeTracker/TimeTracker';
import './App.scss'

class App extends Component {
    render() {
        return (
            <main>
                <TimeTracker/>
            </main>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
