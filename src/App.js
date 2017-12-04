import React, {Component} from 'react';
import FancyPlaceholders from './components/FancyPlaceholders'
import './App.css';

class App extends Component {

    render() {
        return (
            <div className='app'>
                <FancyPlaceholders />
            </div>
        );
    }
}

export default App;
