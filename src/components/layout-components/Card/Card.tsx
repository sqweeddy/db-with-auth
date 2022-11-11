import React from "react";
import { Link } from "react-router-dom";
import { ICatalogItem } from "../../../features/Catalog/catalogSlice";
import styles from "./card.module.css";

export function Card({ avatar, email, id, last_name }: ICatalogItem) {
  return (
    <li className={styles.card}>
      <Link className={styles.link} to={String(id)}>
        <img className={styles.img} src={avatar} alt="avatar" />
        <h3 className={styles.name}>{last_name}</h3>
        <h3 className={styles.name}>{id}</h3>
      </Link>
    </li>
  );
}
