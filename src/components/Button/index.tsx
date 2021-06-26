import './styles.scss'

interface ButtonProps {
   handleClick?: () => void;
   children: string;
}

export function Button({ handleClick, children }: ButtonProps) {
   return (
      <button onClick={handleClick}>
         {children}
      </button>
   )
}