import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact />
    </Switch>
  </BrowserRouter >
  );
}

export default App;