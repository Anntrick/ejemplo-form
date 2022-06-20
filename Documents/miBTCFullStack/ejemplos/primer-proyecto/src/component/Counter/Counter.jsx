import React, { Component } from 'react';
/*
class Counter extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            count: 0,
            name: ""
        }
    }
    increment() {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return <div onClick={() => this.increment()}>
            {this.state.count}
        </div>;
    }
}
export default Counter;*/

const Counter = props => {
    const [counter, setCounter] = useState(props.initialValue)

    const increment = () => {
        setCounter(counter + props.diff)
    }

    return (
        <div onClick={() => this.increment()}>
            {this.state.count}
        </div>
    )
    
}

export default Counter