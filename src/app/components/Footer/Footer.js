import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.boxContainer}>
        <div className={styles.box}>
          <a href="#">
            <h3>Stravel</h3>
          </a>
          <p>
            Trai qua 17 năm phát triển bền vững, Stravel đã ghi dấu ấn của mình
            với thông điêp
            <br />
            "Nâng tầm trải nghiệm chuyến đi"
          </p>
        </div>
        <div className={styles.box}>
          <h3>Chi Nhánh Chính</h3>
          <a href="#">Hà nội</a>
          <a href="#">Ấn độ</a>
          <a href="#">Mỹ</a>
          <a href="#">Nhật Bản</a>
          <a href="#">Pháp</a>
        </div>
        <div className={styles.box}>
          <h3>Chuyển hướng</h3>
          <a href="#home">Trang Chủ</a>
          <a href="#book">Đặt lịch</a>
          <a href="#packages">Ưu Đãi</a>
          <a href="#services">Dịch Vụ</a>
          <a href="#gallery">Thư Viện</a>
          <a href="#review">Đánh giá</a>
          <a href="#contact">Liên Hệ</a>
        </div>
        <div className={styles.box}>
          <h3>Tương tác</h3>
          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">twitter</a>
          <a href="#">linkedin</a>
        </div>
      </div>
      <h1 className={styles.credit}>
        Created By <span>STRAVEL</span> | all rights reserved
      </h1>
    </section>
  );
};

export default Footer;
