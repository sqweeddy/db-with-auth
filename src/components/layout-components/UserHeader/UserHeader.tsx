import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../features/Auth/authSlice";
import { useAppDispatch } from "../../../hooks/hooks";
import { useUser } from "../../../hooks/useUser";
import styles from "./userheader.module.css";

export function UserHeader() {
  const user = useUser();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.btns}>
            <Link to="/" className={styles.back}>
              Назад
            </Link>
            <Link to="/auth" className={styles.logout} onClick={handleLogout}>
              Выход
            </Link>
          </div>

          <div className={styles.content}>
            <img className={styles.img} src={user?.avatar} alt="userPhoto" />
            <div className={styles.info}>
              <h3 className={styles.name}>{user?.last_name}</h3>
              <p className={styles.id}>{user?.id}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
