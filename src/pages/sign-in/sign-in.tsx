import { SignInForm } from "../../components/sign-in-form";

import styles from "./sign-in.module.scss";

export const SignIn = () => {
  return (
    <div className={styles["sign-in"]}>
      <div className={styles["sign-in__illustration"]}>
        <img src="/image.png" alt="Illustration" />
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
