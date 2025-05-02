import { Component } from 'react';

class Button extends Component {
    state = {
        age : 42
    }

    handleAgeChange = () => {
        this.setState({age: this.state.age + 1 })
    }

    render() {
      return <div>
        <button onClick={this.handleAgeChange}>
            Zmen vek
        </button>

        <h1 className='text-cyan-600 text-7xl hover:text-red-500'>
            {this.state.age}
            {process.env.REACT_APP_API_URL}
        </h1>
      </div>;
    } 
  }
  export default Button;