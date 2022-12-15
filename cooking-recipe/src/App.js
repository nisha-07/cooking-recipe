import './App.css';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"

import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import useTheme from './hooks/useTheme';

function App() {
  const { mode } = useTheme()
  return (
    <div className={mode}>
      <BrowserRouter>
        {/* this navbar component will be inside the browser router bcz we're using Link tag inside it */}
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search" element={<Search />}>
            <Search />
          </Route>
          <Route path="/recipes/:id" element={<Recipe />}>
            <Recipe />
          </Route>
          <Route path="/create" element={<Create />}>
            <Create />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
