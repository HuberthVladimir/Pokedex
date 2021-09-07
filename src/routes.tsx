import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { PokemonLIst } from './pages/PokemonList'
import { PokemonTypes } from './pages/PokemonType'
import { PokemonGames } from './pages/PokemonGames'
import { Navigation } from './components/Nav'

export default function Routes() {
   return (
      <BrowserRouter>
         < Navigation />
         <Switch>
            <Route path="/" component={PokemonLIst} exact />
            <Route path="/types" component={PokemonTypes} />
            <Route path="/game" component={PokemonGames} />
            <Route path="/game/card" component={PokemonGames} />
            <Route path="/game/score" component={PokemonGames} />
         </Switch>
      </BrowserRouter>
   )
}