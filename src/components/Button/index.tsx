import './styles.scss'

interface ButtonProps {
   handleClick?: any;
   children: string;
   color: string;
}

export function Button({ handleClick, children, color }: ButtonProps) {
   return (
      <button id="component-button" className={color} onClick={handleClick}>
         {children}
      </button>
   )
}