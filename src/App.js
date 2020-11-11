import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Register from './containers/Register/Register';
import Catalogue from './containers/Catalogue/Catalogue';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/login/register' component={Register} exact />
      <Route path='/catalogue' component={Catalogue} exact />
    </Switch>
  </BrowserRouter >
  );
}

export default App;