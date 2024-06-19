import React, { Component } from 'react';

export class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"dhoni",
            isState: true,
            url: '../src/assets/dhoni.jpg'
        };
        this.changeimg = this.changeimg.bind(this);
    }

    img1 = '../src/assets/dhoni.jpg';
    img2 = '../src/assets/sachin.jpg';

    changeimg() {
        this.setState((prevState) => ({
            isState: !prevState.isState,
            url: prevState.isState ? this.img2 : this.img1,
            name: prevState.isState ? "sachin" : "dhoni"
        }));
    }

    render() {
        return (
            <div>
                <img src={this.state.url} alt="Toggle" /> <br/>
                <p>{this.state.name}</p>
                <button onClick={this.changeimg}>Toggle</button>
            </div>
        );
    }
}

export default Toggle;
