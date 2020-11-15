import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Register from './containers/Register/Register';
import Catalogue from './containers/Catalogue/Catalogue';
import Login from './containers/Login/Login';
import Profile from './containers/Profile/Profile';
import Usermovies from './containers/Usersmovies/Usersmovies';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login/register' component={Register} exact />
      <Route path='/catalogue' component={Catalogue} exact />
      <Route path='/login' component={Login} exact />
      <Route path='/profile' component={Profile} exact />
      <Route path="/admin/usersmovies" component={Usermovies} exact />
    </Switch>
  </BrowserRouter >
  );
}

export default App;