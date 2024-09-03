import { InputHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./input.module.scss";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label?: string;
  required?: boolean;
  error: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Input: React.FC<InputProps> = ({
  className,
  label,
  leftIcon,
  rightIcon,
  error,
  ...props
}) => {
  return (
    <div
      className={styles["input"]}
      data-with-left={!!leftIcon}
      data-with-right={!!rightIcon}
      data-error={!!error}
    >
      <label className={clsx(styles["input__label"], className)}>{label}</label>

      <div className={styles["input__input-wrapper"]}>
        {leftIcon && (
          <div
            className={clsx(styles["icon"], styles["icon__left"])}
            data-position="left"
          >
            {leftIcon}
          </div>
        )}

        <input className={styles["input__input"]} {...props} />

        {rightIcon && (
          <div
            className={clsx(styles["icon"], styles["icon__right"])}
            data-position="right"
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && <div className={styles["input__error"]}>{error}</div>}
    </div>
  );
};
