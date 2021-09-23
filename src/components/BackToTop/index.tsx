import './styles.scss'
import { IoCaretUpSharp } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { useGloBalContext } from '../../hooks/context';

export const BackToTop = () => {
   const { scrollPosition } = useGloBalContext()

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <div className="backToTop" onClick={scrollTop} style={{ display: `${scrollPosition > 80 ? 'flex' : 'none'}` }}>
         <IconContext.Provider value={{ size: '2.5rem', color: '#FFF' }}>
            <IoCaretUpSharp aria-hidden="true" />
            <span className="sr-only">back to the top of the page</span>
         </IconContext.Provider>
      </div>
   )
}