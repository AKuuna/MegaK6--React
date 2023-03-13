import { Component } from "react";

export class Clock extends Component {
    state = {
        dt: new Date(),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState( {
                dt: new Date(),
            })
        });
    };

    componentWillUnmount() {
        clearInterval(this.intervalId);
    };

    render() {
        return <p>{this.state.dt.toLocaleString()}</p>;
    };
};
