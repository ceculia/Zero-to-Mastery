import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox'
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component{
    constructor() { // put state in here
        super()// has to come for 'this' statement
        this.state = {// typically lives in the parent compoent
            robots: [],
            searchfield: ''
        }
    
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>  response.json())
        .then(users =>  this.setState({ robots: users}));
    
    }

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
        

    }

    render() {
        const {robots,searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
         return !robots.length ? 
            <h1>Loading</h1> :

           ( <div className='tc'>
                <h1 className='f1'> RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>)
    
    }

}



export default App;