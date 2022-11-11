import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "./hooks";

export function useUser() {
  const { id } = useParams();
  const users = useAppSelector((state) => state.catalog.data);
  const user = users.find((el) => el.id == id);
  return user
}