import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import React from 'react';
import './App.css';
import Content from './components/Content';
import SideButton from './components/SideButton';
import axios from 'axios';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component{

  constructor(props) {
    super(props);
    var sideButtonText = ["home", "about", "contact us", "getting started", "variables", "comments", "printing", "arithmetic", "strings", "user input", "math", "if statement", "boolean logic", "constants", "for loop", "while loop", "nesting", "break", "functions", "overloading", "casting", "random numbers", "ascii", "array", "arraylist", "2d array", "hashmap"];
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
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (
      <div className="full">
        <div className = "title">
          <h1>
            just for java
            {
              user
                ? <button className="login" onClick={signOut}>sign out of account</button>
                : <button className="login" onClick={signInWithGoogle}>sign in with google</button>
            }
          </h1>
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
            <Content 
              page={this.state.sideButtonSelected}
              user={user} 
            />
          </div>
        </div>
      </div>
    );
  }

}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);