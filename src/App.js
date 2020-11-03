import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
    </Switch>
  </BrowserRouter >
  );
}

export default App;