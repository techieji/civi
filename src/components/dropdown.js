import * as React from 'react';

export default class Dropdown extends React.Component {
    state = {
        selected: null,
        options: [],
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

    render = () => {
        return (
            <div className="m-4">
                <h3> {this.props.name} </h3>
                <select className="m-2">
                    {this.state.options}
                </select>
            </div>
        );
    }

}
