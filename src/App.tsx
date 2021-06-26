import './app.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { PokemonLIst } from "./pages/PokemonList";

import { IconContext } from "react-icons";
import { SiPokemon } from 'react-icons/si'

export function App() {
  return (
    <Router>
      <nav>
        <div className="icon">
          <IconContext.Provider value={{ className: "iconNavigationBar" }}>
            <div>
              <SiPokemon />
            </div>
          </IconContext.Provider>
        </div>

        <div className="buttonsNavBar">
          <Link style={{ textDecoration: 'none' }} to='/'>
            <p>Pokemons</p>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/types'>
            <p>Types</p>
          </Link>
          <Link style={{ textDecoration: 'none' }} to='/weakness'>
            <p>Weakness</p>
          </Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <PokemonLIst />
        </Route>
        <Route path='/types'>
          <h1>
            oi
          </h1>
        </Route>
        <Route path='/weakness'>
          <h1>
            salve
          </h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;


