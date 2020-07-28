import React from 'react';
import './App.css';
import SideButton from './SideButton';

class App extends React.Component{

  constructor(props) {
    super(props);
    var sideButtonText = ["home", "about", "resources", "contact us", "variables", "printing", "user input", "if statement", "boolean logic", "for loop", "while loop"];
    var length = sideButtonText.length;
    var sideButtonSelected = [];
    for(var i = 0; i < length; i++) {
      if(i === 0) {
        sideButtonSelected.push(true);
      } else {
        sideButtonSelected.push(false);
      }
    }
    this.state={
      sideButtonText: sideButtonText,
      sideButtonSelected: sideButtonSelected,
      length: length
    }
  }

  click(index) {
    var sideButtonSelected = [];
    for (var i = 0; i < this.state.length; i++) {
      if(i === index) {
        sideButtonSelected.push(true);
      } else {
        sideButtonSelected.push(false);
      }
    }
    this.setState({
      sideButtonSelected: sideButtonSelected
    })
  }

  render() {
    return (
      <div className="full">
        <div className = "title">
          <h1>just for java</h1>
        </div>
        <div className = "bottom">
          <div className = "sidebar">
            {this.state.sideButtonText.map((text, i) =>
              <div key={i}>
                <SideButton text={text} click={()=>this.click(i)} isSelected={this.state.sideButtonSelected[i]} />
              </div>
            )}
          </div>
          <div className = "content">
          </div>
        </div>
      </div>
    );
  }

}

export default App;
