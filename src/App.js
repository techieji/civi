import logo from './logo.svg';
import './App.css';
import VisualizationMap from './components/visualization-map';
import Home from './components/home';

function App() {
    return (
        <div className="App">
            <Home ops={[
                {name: "Map Visualization", obj: <VisualizationMap/>}
            ]}/>
        </div>
    );
}

export default App;
