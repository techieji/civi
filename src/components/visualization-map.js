import * as React from 'react';
import Dropdown from './dropdown';
import { getVariables, getMapTypes } from '../data/data-api';

export default class SidebarMap extends React.Component {
    state = {
        options: {
            mapType: "County", //County | District 
            dataSource: "IncomeLevel",
            colorMin: "#FF00000",
            colorMax: "#00FF00",
        },
    }

    render = () => {
        console.log(this.state);
        return (
            <div>
                {/* Sidebar */}
                <div className="h-screen w-1/5 bg-slate-100 shadow-lg">
                    <div>
                        <h1 className="text-2xl font-bold"> Map Display </h1> 
                        <Dropdown name="Map Type" options={getMapTypes()}/>
                        <Dropdown name="Variable" options={getVariables()}/>
                    </div>
                </div>


            </div>
        );
    }
}
