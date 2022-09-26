import * as React from 'react';

class VisualizationSelect extends React.Component {
    render = () => {
        return (
            <div className="p-4 border-md m-4 cursor-pointer bg-slate-200" onClick={() => {this.props.selectCallback(this.props.id)}}>
                <h1> {this.props.name} </h1>
            </div>
        );
    }
}

export default class Home extends React.Component {
    state = {
        selected: null,
        opsUI: null,
    }

    selectCallback = (id) => {
        this.setState({selected: id});
    }

    componentDidMount = () => {
        let opsUI = [];
        let i = 1;
        this.props.ops.forEach(op => {
            opsUI.push(<VisualizationSelect name={op.name} id={i-1} key={1} selectCallback={this.selectCallback}/>);
        });
        this.setState({opsUI: opsUI});
        console.log(this.props.ops);

    }

    render = () => {
        return (
            <div className="flex w-screen h-screen"> 
                {this.state.selected != null ?
                    this.props.ops[this.state.selected].obj
                :
                    this.state.opsUI
                }
            </div>
        );
    }
}
