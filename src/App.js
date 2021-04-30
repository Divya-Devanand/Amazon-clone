import React, {useEffect} from 'react'
import './App.css';
import Header from './Header.js'
import Home from './Home.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login.js';
import { auth } from "./firebase"
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';




const promise = loadStripe('pk_test_51IaYDsSEj2GhJH7LKxDoeyJVVLbX6I57iqTxqMd5d0kbjQkw5N24dhoRBg8tFKhZRac4TVuUzMxi23o57moSh0Fh00ePB3MExB');

function App() {

  const [{}, dispatch] = useStateValue();
  // console.log('db command-----')
  //     db.collection("users").add({
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815
  //   })
  //   .then((docRef) => {
  //       console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch((error) => {
  //       console.error("Error adding document: ", error);
  //   });

    useEffect(()=> {
      //will only run when app component loads...
      
      console.log('db command-----')
      auth.onAuthStateChanged(authUser => {
        console.log('USER IS>>>', authUser);

        if(authUser) {
          //user is logged in/ user was logged in 
          dispatch({
            type: 'SET_USER',
            user: authUser
          });
        }else {
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
    }, [])
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe ={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
