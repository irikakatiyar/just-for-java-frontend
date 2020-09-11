/*
notes from 9/2:
+ (minor) remove the test button from the homepage
+ in ProgressUpdater, change the UI to be a dropdown, and then when the user clicks Update button, update the db accordingly. you will have to look up how a select element works in react. the selected item in the selector will be stored as a state variable
- create a new API endpoint that fetches the status of a topic given the topic and a user. display this status every time the user loads a page and they are logged in. note that if there is nothing corresponding in the db, that means they have not started the topic
     -try googling "firestore get data", the first result will help - model the api endpoint off of the existing one you've written
     - when you are using this endpoint, you'll want to use "get" wtih axios instead of "post"
- stretch: create another new API endpoint that fetches the status of all topics corresponding to a user, and display these as a table on the homepage

*/


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
    var sideButtonText = ["home", "about", "resources", "contact us", "getting started", "variables", "comments", "printing", "arithmetic", "Strings", "user input", "Math", "if statement", "boolean logic", "constants", "for loop", "while loop", "nesting", "break", "functions", "more functions", "casting", "random numbers", "ASCII", "array", "for-each loop", "2D array", "ArrayList", "HashMap"];
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