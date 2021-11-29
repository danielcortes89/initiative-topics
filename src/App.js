import './App.css';
import TopicDisplayComponent from './components/TopicDisplayComponent';

import { topics as Data } from './DATA/data'

function App() {
    return (
        <div className="App">
			{Data.map(unit => {
				return <TopicDisplayComponent unit={unit} key={unit.id}/>
			})}  
    	</div>
  	);
}

export default App;
