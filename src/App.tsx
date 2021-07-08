import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PokemonLIst } from "./pages/PokemonList";

import { PokemonTypes } from './pages/PokemonType';
import { Navigation } from './components/Nav';

export function App() {
  return (
    <Router>
      < Navigation />
      <Switch>
        <Route exact path='/'>
          <PokemonLIst />
        </Route>
        <Route path='/types'>
          <PokemonTypes />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;


