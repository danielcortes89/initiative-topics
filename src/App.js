import './App.css';
import React, { Component } from 'react'
import TopicDisplayComponent from './components/TopicDisplayComponent';

import { topics as Data } from './DATA/data'
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			displayedItems: Data,
			searchValue: "",
			byRank: false
		}
	}

	sortByRank = () => {

		console.log(this.state.byRank)
		if(this.state.byRank){
			let holder = this.state.displayedItems.sort((a,b) => {
				return a.id - b.id
			})
			this.setState({byRank: false , displayedItems: holder})
		} else {
			let start = this.state.displayedItems.sort((a,b) => {
				return a.rank - b.rank
			})
			this.setState({  byRank: true ,displayedItems: start})
		}
	}

	clearSearch = () => {
		this.setState({
			searchValue: ""
		})
	}

	onKeyPress = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(e.target.name)
	}
	render(){
    	return (
        	<div className="App">
				<div>
					<div>
						<label>Search</label>
						<input 
							type="text"
							name="searchValue" 
							value={this.state.searchValue} 
							onChange={this.onKeyPress}/>
					</div>
					<button onClick={() => this.clearSearch}>Clear</button>
					{this.state.byRank && <button onClick={this.sortByRank}>Normal</button>}
					{!this.state.byRank && <button onClick={this.sortByRank}>By Rank</button>}
					
				</div>
				{this.state.displayedItems.map(unit => {
					return <TopicDisplayComponent unit={unit} key={unit.id}/>
				})}  
    		</div>
  		);
	}
}

export default App;
