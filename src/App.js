import React from 'react';
import './App.css';
import Content from './components/Content';
import SideButton from './components/SideButton';

class App extends React.Component{

  constructor(props) {
    super(props);
    var sideButtonText = ["home", "about", "resources", "contact us", "variables", "printing", "user input", "if statement", "boolean logic", "for loop", "while loop"];
    var sideButtonSelected = "home";
    
    this.state={
      sideButtonText: sideButtonText,
      sideButtonSelected: sideButtonSelected
    }
  }

  click(text) {
    var sideButtonSelected = text;
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
                <SideButton text={text} click={()=>this.click(text)} isSelected={this.state.sideButtonSelected === text}/>
              </div>
            )}
          </div>
          <div className = "content">
            <Content page={this.state.sideButtonSelected} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
