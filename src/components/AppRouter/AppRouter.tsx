import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Home } from "../../pages/Home";
import { User } from "../../pages/User";
import { useAppSelector } from "../../hooks/hooks";

export function AppRouter() {
  const { isAuth } = useAppSelector((state) => state.auth);

  return isAuth ? (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<User />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  ) : (
    <Routes>
      <Route path="/*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
