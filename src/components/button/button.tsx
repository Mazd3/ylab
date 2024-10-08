import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  left,
  right,
  ...props
}) => {
  return (
    <button className={clsx(styles["button"], className)} {...props}>
      {left && <>{left}</>}
      {children}
      {right && <>{right}</>}
    </button>
  );
};
