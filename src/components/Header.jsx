import React from "react";
import style from "./Header.module.css";
import { Logo } from "./Logo";

export const Header = () => (
  <header className={style.Header}>
    <Logo fill="var(--primary-200)" size={160} />
  </header>
);
