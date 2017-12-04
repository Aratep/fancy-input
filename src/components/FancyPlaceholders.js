import React, {Component} from 'react';

class FancyPlaceholders extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            classname: 'placeholder'
        }
    }

    onChange = (event) => {
        const value = event.target.value;
        this.setState({value})
        console.log(value.length)
        this.toggleClassNames(value.length)
    }

    toggleClassNames = (length) =>  {
        let classname;

        if(length > 0) {
            classname = 'stamp'
        }
        else {
            classname = 'placeholder'
        }

        this.setState({classname})
    }

    render() {
        const {value, classname} = this.state;

        return (
            <div className='fancyinput'>
                <input
                    value={this.state.value}
                    className='fancyinput '
                        onChange={this.onChange}/>
                <span className={classname}>First name</span>
            </div>
    );
    }
}

export default FancyPlaceholders;
