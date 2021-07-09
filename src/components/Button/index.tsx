import './styles.scss'

interface ButtonProps {
   handleClick?: any;
   children: string;
   color: string;
}

export function Button({ handleClick, children, color }: ButtonProps) {
   return (
      <option className={color} onClick={handleClick}>
         {children}
      </option>
   )
}