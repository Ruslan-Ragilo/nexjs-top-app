import cn from "classnames";
import { PProps } from "./P.props";
import styles from './P.module.css';


export const P = ({ children, size, className, ...props }: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l'
      })}
      {...props}
    >
      {children}
    </p>
  );
};