import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import App from './components';
import NavBar from './components/navBar';
import CartComponent from './components/cart';
import configureStore from './store/rootStore';
import history from './store/history';
import FavList from './components/favList';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootstore = configureStore();

ReactDOM.render(
    <Provider store={rootstore}>
        <Row>
            <Col md={12}>
            <Router history={history}>
            <NavBar />
                <Switch>
                    <Route path='/cart' component={CartComponent}/>
                    <Route path='/fav' component={FavList} />
                    <Route path='/' component={App}/>
                </Switch>
                </Router>
            </Col>
        </Row>
    </Provider>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
