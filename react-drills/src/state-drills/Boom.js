import React from 'react';

class Boom extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }
        componentDidMount() {
            this.timerID = setInterval(
                () => this.state.count + 1,
                1000
            );
        }
        componentWillUnmount() {
            clearInterval(this.timerID);
        }
        tick() {
            this.setState({
           const { count } = this.state.count
           if (count >= 8) {
               clearInterval(this.setInterval) 
               return 'BOOM!!!!'
           } else if (count % 2 === 0) {
               return 'tick'
           } else {
               return 'tock'
           }
           }
            )}   
            };
         
        render() {
            return (<div>
                <p> 
                 "tick", "tock" or "BOOM!!!!".
                 </p>
                </div>) 
            }
        
        export default Boom;