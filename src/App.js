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
    var sideButtonText = ["home", "about", "resources", "contact us", "getting started", "variables", "comments", "printing", "arithmetic", "Strings", "user input", "Math", "if statement", "boolean logic", "constants", "for loop", "while loop", "break", "nested loops", "functions", "casting", "random numbers", "ASCII", "array", "for-each loop", "2D array", "ArrayList", "HashMap"];
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
    //console.log(user.uid)
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