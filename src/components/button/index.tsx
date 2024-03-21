import css from './index.module.scss'
import cn from "classnames";

interface Props{
    text: string
    variant: "secondary" | 'primary'
}
export const Button = ({variant,text}: Props) => {
  return (
    <button className={cn(css.button, css[variant])}>
        <span>{text}</span>
    </button>
  );
}
