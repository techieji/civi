import * as React from 'react';

export default class Dropdown extends React.Component {
    state = {
        selected: null,
        options: [],
    }

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    componentDidMount = () => {
        let optionsElements = [];
        let i = 0;
        this.props.options.forEach(option => {
            optionsElements.push(
                <option key={i}>
                    {option}
                </option>
            );
            i++;
        })
        this.setState({options: optionsElements, selected: this.props.options[0]});
    }

    getValue = () => {
        return this.input.current.options[this.input.current.selectedIndex].text;
    }

    render = () => {
        return (
            <div className="m-4">
                <h3> {this.props.name} </h3>
                <select className="m-2" ref={this.input}>
                    {this.state.options}
                </select>
            </div>
        );
    }

}
