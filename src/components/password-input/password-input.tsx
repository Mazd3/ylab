import { useState } from "react";
import clsx from "clsx";

import { Input, type InputProps } from "../input";
import { ToggleIcon } from "./toggle-icon";

import styles from "./password-input.module.scss";

type PasswordInputProps = InputProps;

export const PasswordInput: React.FC<PasswordInputProps> = ({
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <Input
      className={clsx(styles["password-input"], className)}
      type={showPassword ? "text" : "password"}
      rightIcon={
        <button
          className={styles["password-input__toggle"]}
          onClick={togglePassword}
        >
          <ToggleIcon reveal={showPassword} />
        </button>
      }
      {...props}
    />
  );
};
