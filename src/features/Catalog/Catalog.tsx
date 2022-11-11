import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchUsers } from "./catalogAPI";
import styles from "./catalog.module.css";
import { Card } from "../../components/layout-components/Card";

const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading, page, total_pages } = useAppSelector(
    (state) => state.catalog
  );

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchUsers(1));
    }
  }, [data.length, dispatch]);

  const onLoading = () => {
    const nextPage = page + 1;
    dispatch(fetchUsers(nextPage));
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <ul className={styles.catalog}>
          {isLoading && <div className={styles.loader}></div>}
          {!isLoading &&
            !error &&
            data.map((user) => (
              <Card
                avatar={user.avatar}
                email={user.email}
                id={user.id}
                last_name={user.last_name}
                key={user.id}
              />
            ))}
          {!isLoading && error && <div className={styles.error}>{error}</div>}
        </ul>
        {page !== total_pages && (
          <button className={styles.loadBtn} onClick={onLoading}>
            Загрузить еще
          </button>
        )}
      </div>
    </section>
  );
};

export default Catalog;
