"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";
import Link from "next/link";
import {
  faMoon,
  faSun,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSunVisible, setSunVisible] = useState(true);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const handleToggleTheme = () => {
    setSunVisible(!isSunVisible);
  };

  const handleToggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-mode", !isSunVisible);
  }, [isSunVisible]);

  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <span className={styles.title}>
            <span>S</span> Travel
          </span>
        </Link>

        <nav className={styles.navbar}>
          <a href="#home">Trang Chủ</a>
          <a href="#book">Đặt Lịch</a>
          <a href="#packages">Ưu Đãi</a>
          <a href="#services">Dịch Vụ</a>
          <a href="#gallery">Thư Viện</a>
          <a href="#review">Đánh Giá</a>
          <a href="#contact">Liên Hệ</a>
        </nav>
        <div className={styles.icon}>
          <div onClick={handleToggleTheme}>
            {isSunVisible ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
          <FontAwesomeIcon
            icon={faSearch}
            className={styles.iconCenter}
            onClick={handleToggleSearch}
          />
          <FontAwesomeIcon icon={faUser} />
        </div>
        <form>
          <input
            type="search"
            placeholder="Tìm kiếm.... "
            className={isSearchVisible ? styles.visible : ""}
          />
        </form>
      </header>
    </div>
  );
};

export default Header;
