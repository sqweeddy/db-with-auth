import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../features/Auth/authSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import styles from "./header.module.css";

export function Header() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.btns}>
            <Link to="/auth" className={styles.logout} onClick={handleLogout}>
              Выход
            </Link>
          </div>
          <div className={styles.text}>
            <h2 className={styles.title}>Наша команда</h2>
            <p className={styles.descr}>
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся на их плечи, и умеющие находить выход из любых,
              даже самых сложных ситуаций.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
