import React from "react";
import { Header } from "../../components/layout-components/Header";
import Catalog from "../../features/Catalog/Catalog";

export function Home() {
  return (
    <>
      <Header />
      <Catalog />
    </>
  );
}
