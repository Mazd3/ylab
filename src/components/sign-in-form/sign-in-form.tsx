import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

import { PasswordInput } from "../password-input";
import { Button } from "../button";
import { Input } from "../input";

import styles from "./sign-in-form.module.scss";

type SignInFormProps = {
  className?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const SignInForm: React.FC<SignInFormProps> = ({ className }) => {
  //
  const [formData, setFormData] = useState<Record<string, string>>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isTouched, setIsTouched] = useState<Record<string, boolean>>({});

  const validateFormData = useMemo(
    () => (isSubmit: boolean) => {
      for (const key in formData) {
        if (isTouched[key] || isSubmit) {
          if (!formData[key]) {
            setErrors((prev) => ({
              ...prev,
              [key]: "Это поле обязательно для заполнения",
            }));
            setIsTouched((prev) => ({ ...prev, [key]: false }));
            break;
          }
          if (key === "password" && formData.password.length < 8) {
            setErrors((prev) => ({
              ...prev,
              password: "Пароль должен содержать не менее 8 символов",
            }));
            setIsTouched((prev) => ({ ...prev, password: false }));
            break;
          }
          if (key === "email" && !emailRegex.test(formData.email)) {
            setErrors((prev) => ({
              ...prev,
              email: "Некорректный адрес электронной почты",
            }));
            setIsTouched((prev) => ({ ...prev, email: false }));
            break;
          }
        }
      }
    },
    [formData, isTouched]
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setIsTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      validateFormData(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [validateFormData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateFormData(true);
    console.log(formData);
  };

  return (
    <form
      className={clsx(styles["sign-in-form"], className)}
      onSubmit={handleSubmit}
    >
      <Input
        onChange={handleOnChange}
        name="email"
        label="Почта"
        placeholder="example@gmail.com"
        error={errors.email}
      />
      <PasswordInput
        onChange={handleOnChange}
        name="password"
        label="Пароль"
        placeholder="******************"
        error={errors.password}
      />
      <Button>Войти</Button>
    </form>
  );
};
