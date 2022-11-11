import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import { fetchToken } from "../../features/Auth/authAPI";
import { fetchRegistrationToken } from "../../features/Registration/registrationAPI";
import { clearData } from "../../features/Registration/registrationSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import styles from "./login.module.css";

interface AuthValues {
  email: string;
  password: string;
}

export function Login() {
  const [registration, setRegistration] = useState(false);
  const dispatch = useAppDispatch();
  const { token, error } = useAppSelector((state) => state.register);
  const { authError } = useAppSelector((state) => state.auth);

  const validateEmail = (value: string) => {
    let error;
    if (!value) {
      error = "Обязательное поле";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Некорректный email адрес";
    }
    return error;
  };

  const validatePassword = (value: string) => {
    let error;
    if (!value) {
      error = "Обязательное поле";
    }
    return error;
  };

  const toogleRegistration = () => {
    setRegistration(!registration);
  };

  const authValues: AuthValues = { email: "", password: "" };
  return (
    <main>
      <section className={styles.login}>
        <div className={styles.wrapper}>
          {token && (
            <h2 className={styles.title}>
              Регистрация успешна! Выполните вход
            </h2>
          )}
          <h2 className={styles.title}>
            {registration ? "Регистрация" : "Авторизация"}
          </h2>
          <Formik
            initialValues={authValues}
            onSubmit={async (values, actions) => {
              if (registration) {
                const resp = await dispatch(fetchRegistrationToken(values));

                if (resp.meta.requestStatus === "fulfilled") {
                  setRegistration(false);
                }
              } else {
                await dispatch(fetchToken(values));
                dispatch(clearData());
              }
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className={styles.form}>
                <label className={styles.label} htmlFor="email">
                  Электронная почта
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  validate={validateEmail}
                  className={
                    errors.email && touched.email
                      ? styles.inputError
                      : styles.input
                  }
                />
                {errors.email && touched.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
                <label className={styles.label} htmlFor="password">
                  Пароль
                </label>
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                  validate={validatePassword}
                  className={
                    errors.password && touched.password
                      ? styles.inputError
                      : styles.input
                  }
                />
                {errors.password && touched.password && (
                  <div className={styles.error}>{errors.password}</div>
                )}
                <button
                  className={styles.btn}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {registration ? "Зарегистрироваться" : "Войти"}
                </button>
              </Form>
            )}
          </Formik>
          {error && (
            <div className={styles.fetchError}>
              <div>{error}</div>
              <div>логин для регистрации: eve.holt@reqres.in</div>
            </div>
          )}
          {authError && (
            <div className={styles.fetchError}>
              <div>{authError}</div>
              <div>логин для авторизации: eve.holt@reqres.in</div>
            </div>
          )}
          {registration ? (
            <div className={styles.switch}>
              <span>Есть аккаунт?</span>
              <button onClick={toogleRegistration}>Войти</button>
            </div>
          ) : (
            <div className={styles.switch}>
              <span>Нет аккаунта?</span>
              <button onClick={toogleRegistration}>Зарегистрироваться</button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
