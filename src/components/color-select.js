import * as React from 'react';

export default class ColorSelect extends React.Component {
    state = {
        selected: "#FFFFFF",
    }

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentDidMount = () => {
        this.input.current.value = this.props.defaultValue;
    }

    getValue = () => {
        return this.input.current.value;
    }

    render = () => {
        return (
            <div className="m-4">
                <h3> {this.props.name} </h3>
                <input type="color" ref={this.input}/>
            </div>
        );
    }

}
