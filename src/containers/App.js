import React from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; //gotta destructure with {} if you're exporting multiple
import SearchBox from '../components/SearchBox';
import './App.css' 
import Scroll from '../components/Scroll';



class App extends React.Component {
    constructor() {
        super() //refer back to advanced objects video for reason behind this
        this.state = {
            robots: [],
            searchfield: '',
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) //converting the new created response parameter to json
        .then(users => this.setState({ robots: users})); 
            
        //this.setState({ robots: robots})
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) //to update the searchfield in the constructor from ''
         
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) { // could also write: if(!this.state.robots.length) {...}
            return <h1> Loading </h1>
        } else {
        return (
            <div className='tc'>
            <h1 className='f1' >RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/> 
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
            </div>
        ); 
        }
    }
     
}

export default App;