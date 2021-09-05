import './styles.scss'

import { ComponentButtonProps } from '../../types'

export function Button({ handleClick, children, color }: ComponentButtonProps) {
   return (
      <button id="component-button" className={color} onClick={handleClick}>
         {children}
      </button>
   )
}