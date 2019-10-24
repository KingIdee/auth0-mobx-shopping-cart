import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import { Provider } from 'mobx-react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import Callback from './callback/Callback';
import Store from './Store';
import { decorate, observable, action } from 'mobx';
import Login from './components/Auth/Login';

decorate(Store, {
  products: observable,
  addToCart: action,
  increaseQuantityInCart: action,
  decreaseQuantityInCart: action,
  removeFromCart: action,
  currentCart: observable
});

const shoppingStore = new Store();

class App extends Component {
  render() {
    const authenticated = this.props.auth.isAuthenticated();

    return (
      <Provider store={shoppingStore}>
        <div className="container">

          <Route exact path='/callback' render={() => (
            <Callback auth={this.props.auth} />
          )} />
          <Route exact path='/' render={() => (

            <Product
              authenticated={authenticated}
              auth={this.props.auth}
              history={this.props.history}
            />
          )} />
          <Route exact path='/login' render={() => (

            <Login
              auth={this.props.auth}
            />
          )} />

        </div>
      </Provider>
    );
  }
}

export default withRouter(App);
