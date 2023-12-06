"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";
import {
  faMoon,
  faSun,
  faSearch,
  faUser,
  faTimes,
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
        <a className={styles.title}>
          <span>S</span> Travel
        </a>
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
      <video
        width="100%"
        height="100%"
        controls={false}
        autoPlay
        loop
        muted
        className={styles.video}
      >
        <source
          src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4"
          type="video/mp4"
        />
      </video>
      <div className={styles.content}>
        <h3>Mọi chuyến đi đều đáng giá</h3>
        <p>Khám phá các vùng đất mới cùng chúng tôi</p>
        <p className={styles.text}>Những chuyến đi đang chờ đợi bạn</p>
        <a href="#packages" className={styles.btn}>
          Khám phá ngay
        </a>
      </div>
    </div>
  );
};

export default Header;
