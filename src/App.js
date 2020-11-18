import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import React from 'react';
import './App.css';
import axios from 'axios';
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Variables from './components/Variables';
import Printing from './components/Printing';
import UserInput from './components/UserInput';
import IfStatement from './components/IfStatement';
import BooleanLogic from './components/BooleanLogic';
import ForLoop from './components/ForLoop';
import WhileLoop from './components/WhileLoop';
import Comments from './components/Comments';
import Functions from './components/Functions';
import RandomNumbers from './components/RandomNumbers';
import ASCII from './components/ASCII';
import Break from './components/Break';
import Strings from './components/Strings';
import Mathematics from './components/Mathematics';
import ArrayList from './components/ArrayList';
import HashMap from './components/HashMap';
import Arrays from './components/Array';
import Arithmetic from './components/Arithmetic';
import Nesting from './components/Nesting';
import GettingStarted from './components/GettingStarted';
import TwoDimArrays from './components/TwoDimArrays';
import Casting from './components/Casting';
import Constants from './components/Constants';
import Overloading from './components/Overloading';
import ForEachLoop from './components/ForEachLoop';
import EscapeSequences from './components/EscapeSequences';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class App extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <Router>
        <div className="full">
          <div className = "title">
            <h1>
              just for java
            </h1>
            {
                user
                  ? <button className="login" onClick={signOut}>sign out of account</button>
                  : <button className="login" onClick={signInWithGoogle}>sign in with google</button>
              }

          </div>
          <div className = "bottom">
            <SideBar />
            <div className = "content"> 
              <h2>{}:</h2>
              <br/>
              <Switch>
                <Route exact path="/">
                  <Home user={user} />
                </Route>
                
                <Route path="/home">
                  <Home user={user}/>
                </Route>

                <Route path="/constants">
                  <Constants user={user}/>
                </Route>

                <Route path="/about">
                  <About user={user}/>
                </Route>

                <Route path="/contact-us">
                  <ContactUs user={user}/>
                </Route>

                <Route path="/variables">
                  <Variables user={user}/>
                </Route>

                <Route path="/printing">
                  <Printing user={user}/>
                </Route>

                <Route path="/user-input">
                  <UserInput user={user}/>
                </Route>

                <Route path="/if-statement">
                  <IfStatement user={user}/>
                </Route>

                <Route path="/boolean-logic">
                  <BooleanLogic user={user}/>
                </Route>

                <Route path="/for-loop">
                  <ForLoop user={user}/>
                </Route>

                <Route path="/while-loop">
                  <WhileLoop user={user}/>
                </Route>

                <Route path="/comments">
                  <Comments user={user}/>
                </Route>

                <Route path="/functions">
                  <Functions user={user}/>
                </Route>

                <Route path="/for-each-loop">
                  <ForEachLoop user={user}/>
                </Route>

                <Route path="/random-numbers">
                  <RandomNumbers user={user}/>
                </Route>

                <Route path="/ascii">
                  <ASCII user={user}/>
                </Route>

                <Route path="/hashmap">
                  <HashMap user={user}/>
                </Route>

                <Route path="/array">
                  <Arrays user={user}/>
                </Route>

                <Route path="/math">
                  <Mathematics user={user}/>
                </Route>

                <Route path="/strings">
                  <Strings user={user}/>
                </Route>

                <Route path="/escape-sequences">
                  <EscapeSequences user={user}/>
                </Route>

                <Route path="/arraylist">
                  <ArrayList user={user}/>
                </Route>

                <Route path="/arithmetic">
                  <Arithmetic user={user}/>
                </Route>

                <Route path="/break">
                  <Break user={user}/>
                </Route>

                <Route path="/getting-started">
                  <GettingStarted user={user}/>
                </Route>

                <Route path="/nesting">
                  <Nesting user={user}/>
                </Route>

                <Route path="/2d-array">
                  <TwoDimArrays user={user}/>
                </Route>

                <Route path="/casting">
                  <Casting user={user}/>
                </Route>

                <Route path="/overloading">
                  <Overloading user={user}/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);