import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as S from '../styles/App-styling';
import Header from './Header/Header';
import Hotel from './Hotel/Hotel';
import SideBar from './SideBar';
import history from '../history';

const App = () => (
  <Router history={history}>
    <S.GlobalStyle />
    <S.GridLayout>
      <Header />
      <SideBar />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/hotel" />} />
        <Route path="/hotel" exact component={Hotel} />
        <Route path="/flight" exact component={Hotel} />
        <Route path="/car_rental" exact component={Hotel} />
        <Route path="/tours" exact component={Hotel} />
        <Route path="*" exact render={() => <Redirect to="/hotel" />} />
      </Switch>
    </S.GridLayout>
  </Router>
);

export default App;
