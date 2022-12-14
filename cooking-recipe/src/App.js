import './App.css';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

function App() {
  return (
    <div className='d-flex'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="*">
            <Redirect path="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
