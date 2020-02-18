import React from 'react';
import './App.css';
import firebase from 'firebase';
import Layout from "./components/layout"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC6mTVergQHhnFJZspuQ909zzhN9VZ0XR0",
  authDomain: "login-with-48b83.firebaseapp.com",
  databaseURL: "https://login-with-48b83.firebaseio.com",
  projectId: "login-with-48b83",
  storageBucket: "login-with-48b83.appspot.com",
  messagingSenderId: "740935315285",
  appId: "1:740935315285:web:0bbb4c17c6dae0479749dc",
  measurementId: "G-YLSE1BNT4F"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();
class App extends React.Component{
  state={
    user:[]
  }
  loginme = () => {
    firebase.auth().signInWithPopup(provider)
    .then((res) => {
    this.setState({user: res.user})
    })
    .catch((err) => {
    console.log(err)
    })
    }
  logoutme=()=>{
    firebase.auth().signOut()
.then((res) => this.setState({user : []}))
.catch((err) => console.log(err))
alert("Successfuly log out")
  }
  render(){
    console.log(this.state.user)
    return(
      <Layout>
      <div >
      <div className="centerize">
        {
          this.state.user.length===0
          ?
          <div className="container">
            <center>
          <h1>Log In Auth Google</h1>
          <h4>By Chrysna</h4>
          <div>
          <img src={require('./aset/google.png')} style={{height:`100px`,width:`100px`}} alt="" />
          </div>
          <button onClick={this.loginme}>Log In With Google</button>
          </center>
          </div>
        
          :
          <div className="centerthis">
              <img src={this.state.user.photoURL} alt='broken' width="200px"/>
              <h2>Welcome! {this.state.user.displayName} To Simple Log In Auth With Google</h2>
              <button onClick={this.logoutme}>Log Out</button>
              <p>I do not claim any personal/private information so be safe because the owner of firebase is google</p>
          </div>
        }
      </div>
      </div>
      </Layout>
    );
  }
}

export default App;
