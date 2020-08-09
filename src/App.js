// Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.17.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.17.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import React from 'react';
import './App.css';
import Content from './components/Content';
import SideButton from './components/SideButton';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component{

  constructor(props) {
    super(props);
    var sideButtonText = ["home", "about", "resources", "contact us", "getting started", "variables", "comments", "printing", "arithmetic", "Strings", "user input", "Math", "if statement", "boolean logic", "for loop", "while loop", "break", "nested loops", "functions", "random numbers", "ASCII", "array", "for-each loop", "ArrayList", "HashMap"];
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
              greeting={
                user 
                  ? <div>hi, <b>{user.displayName.toLowerCase()}</b>!</div>
                  : <div>hi!</div>
              }
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