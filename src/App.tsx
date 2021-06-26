import './app.scss'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { CardsPokemonsStats } from "./components/CardsPokemonsStats";
// import { Api } from './services/api';

export function App() {

  // Api.get('/assets')
  //   .then(response => response.data)
  return (
    <Router>
      <nav>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <p>Pokemons</p>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/types'>
          <p>Tipos</p>
        </Link>
        <Link style={{ textDecoration: 'none' }} to='/weakness'>
          <p>Fraquezas</p>
        </Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <CardsPokemonsStats />
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


