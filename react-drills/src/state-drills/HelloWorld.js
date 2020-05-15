import React from 'react';

class HelloWorld extends React.Component {
    state = {
    who: 'World'
    }
    handleClick = () => {
        // State is updated using setState
        this.setState({
            who: 'world',
            friend: 'friend',
            react: 'react'
        });
    };
    render() { 
        return ( 
        <div> 
            <p>Hello: 
            {this.state.who}!</p> 

            <button onClick={() => this.setState({who: 'WORLD'})}>World</button>
            <br/>
            <button onClick={() => this.setState({who: 'FRIEND'})}>Friend</button>
            <button onClick={() => this.setState({who: 'REACT'})}> React </button>
            </div> ) 
            } 
        }
export default HelloWorld