import { SignInForm } from "../../components/sign-in-form";

import styles from "./sign-in.module.scss";

export const SignIn = () => {
  return (
    <div className={styles["sign-in"]}>
      <div className={styles["sign-in__illustration"]}>
        <img
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Illustration"
        />
      </div>
      <div className={styles["sign-in__form-wrapper"]}>
        <img src="/ylab.svg" alt="" />
        <div className={styles["sign-in__form-container"]}>
          <h1>Привет!</h1>
          <p>Войди в свою учетную запись.</p>
          <SignInForm className={styles["sign-in__form"]} />
        </div>
        <div className={styles["sign-in__to-sign-up"]}>
          Нет аккаунта? <span>Зарегистрироваться</span>
        </div>
      </div>
    </div>
  );
};
