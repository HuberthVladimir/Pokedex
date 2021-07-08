import './styles.scss'

import { IconContext } from "react-icons";
import { SiPokemon } from 'react-icons/si'
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export const Navigation = () => {
   return (
      <nav>
         <div className="icon">
            <IconContext.Provider value={{ className: "iconNavigationBar" }}>
               <a href="/">
                  <SiPokemon />
               </a>
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
               <a href="https://github.com/HuberthVladimir/Pokedex" style={{ color: '#000' }}>
                  <FaGithub />
               </a>
            </IconContext.Provider>
         </div>
      </nav>
   )
}