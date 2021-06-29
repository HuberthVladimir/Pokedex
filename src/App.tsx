import './app.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { PokemonLIst } from "./pages/PokemonList";

import { IconContext } from "react-icons";
import { SiPokemon } from 'react-icons/si'
import { PokemonTypes } from './pages/PokemonType';

import { FaGithub } from 'react-icons/fa'

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

          <IconContext.Provider value={{ className: "iconGitHub" }}>
            <a href="https://github.com/HuberthVladimir">
              <FaGithub />
            </a>
          </IconContext.Provider>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <PokemonLIst />
        </Route>
        <Route path='/types'>
          <PokemonTypes />
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


