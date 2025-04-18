import { FC, HTMLProps } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={styles["button"]} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
