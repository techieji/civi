import * as React from 'react';
import Dropdown from './dropdown';
import { getVariables, getMapTypes } from '../data/data-api';
import ColorSelect from './color-select';

export default class SidebarMap extends React.Component {
    state = {
        options: {
            mapType: "County", //County | District 
            dataSource: "IncomeLevel",
            colorMin: "#FF00000",
            colorMax: "#00FF00",
        },
    }

    constructor(props) {
        super(props);
        this.mapType = React.createRef();
        this.variable = React.createRef();
        this.minColor = React.createRef();
        this.maxColor = React.createRef();
    }

    updateOptions = () => {
        this.setState({ 
            options: {
                mapType: this.mapType.current.getValue(),
                dataSource: this.dataSource.current.getValue(),
                colorMin: this.colorMin.current.getValue(),
                colorMax: this.colorMax.current.getValue(),
            }
        });
    }

    render = () => {
        console.log(this.state);
        return (
            <div>
                {/* Sidebar */}
                <div className="h-screen w-1/5 bg-slate-100 shadow-lg">
                    <div>
                        <h1 className="text-2xl font-bold"> Map Display </h1> 
                        <Dropdown name="Map Type" options={getMapTypes()} ref={this.mapType}/>
                        <Dropdown name="Variable" options={getVariables()} ref={this.variable}/>
                        <ColorSelect name="Min Color" defaultValue="#FF0000" ref={this.minColor}/>
                        <ColorSelect name="Max Color" defaultValue="#00FF00" ref={this.maxColor}/>
                    </div>
                </div>
            </div>
        );
    }
}
