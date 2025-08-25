
import React from "react";

class Hello extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {

        return <>
            <h1>Hello{this.props.name && `, ${this.props.name}`}</h1>
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={e => this.increment()}>Click</button>
            </div>
        </>
    }
}

export default Hello;