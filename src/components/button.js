import { Component } from 'react';

class Button extends Component {
  state = {
    age: 0
  };

  handleAgeChange = () => {
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    const buttonStyle = {
      padding: "15px 30px",
      backgroundColor: "#ff4f81",
      color: "#fff",
      fontSize: "1.2rem",
      fontWeight: "bold",
      border: "2px solid #ff4f81",
      borderRadius: "12px",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      transition: "all 0.3s ease-in-out",
    };

    const hoverStyle = {
      backgroundColor: "#ffffff",
      color: "#ff4f81",
      borderColor: "#ff4f81",
    };

    const boxStyle = {
      marginTop: "300px",
      maxWidth: "250px",
      margin: "20px auto 200px", 
      display: "block",  
      padding: "20px 40px",
      backgroundColor: "#ff4f81",
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "bold",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.2s",
    };

    return (
      <div>
        <button
          onClick={this.handleAgeChange}
          style={buttonStyle}
          onMouseOver={e => {
            e.target.style.backgroundColor = hoverStyle.backgroundColor;
            e.target.style.color = hoverStyle.color;
            e.target.style.borderColor = hoverStyle.borderColor;
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = buttonStyle.backgroundColor;
            e.target.style.color = buttonStyle.color;
            e.target.style.borderColor = buttonStyle.border;
          }}
        >
          💖 KLIKNI = pošleš lásku!
        </button>

        <div style={boxStyle}>
          {this.state.age}
        </div>
      </div>
    );
  }
}

export default Button;
