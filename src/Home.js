import React from "react";
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // We can set maxvalue over here
      counterVal: 0
    }
  }

  // Function to increment counter value
  incrementCounter = () => {
    this.setState({
      counterVal: parseInt(this.state.counterVal) + 1
    })
  }

  // Function to decrement counter value
  decrementCounter = () => {
    this.setState({
      counterVal: this.state.counterVal - 1
    })
  }

  initializeValue = (e) => {
    this.setState({
      counterVal: e.target.value
    })
  }

  render() {
    return (
      <div className="home">
        <h4>Couter Component</h4>
        <div className="home__container">
          <button className="home__minusSign" onClick={this.decrementCounter}>-</button>
          <input className="home__numberBox" type="text" value={this.state.counterVal} onChange={(e) => this.initializeValue(e)} />
          <button className="home__minus" onClick={this.incrementCounter}>+</button>
        </div>
      </div>
    );
  }
}

export default Home;
