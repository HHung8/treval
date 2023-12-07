import Header from "../components/Header/Header";
import styles from "./order.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHiking,
  faUtensils,
  faHotel,
  faWallet,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer/Footer";

const Order = () => {
  return (
    <div>
      <Header />
      <section className={styles.home}>
        <div className={styles.content}>
          <span className={styles.country}>Egypt</span>
          <h3 className={styles.contentCountry}>Vùng đất của Pharaohs</h3>
          <p className={styles.animate}>
            Egypt là một trong những quốc gia lâu đời nhất trên thế giới. Đây là
            nơi người Ai Cập cổ đại đã xây dựng một nền văn minh vĩ đại trong
            thung lũng sông Nile, với rất nhiều đền thờ, cổ vật và những tàn
            tích ngoạn mục đáng để bạn khám phá
          </p>
          <a>Tìm hiểu thêm</a>
        </div>
      </section>
      <section className={styles.bookForm}>
        <form className={styles.action}>
          <div className={styles.inputBox}>
            <span>
              <h1 className={styles.packages}>
                Ưu đãi 48.000.000 cho 7người/7ngày
              </h1>
            </span>
          </div>
          <div className={styles.boxBtn}>
            <span>
              <a className={styles.btnBook}>Đặt ngay</a>
            </span>
          </div>
        </form>
      </section>
      <section className={styles.about}>
        <div className={styles.video}>
          <video
            width="450px"
            height="300px"
            controls={false}
            autoPlay
            loop
            muted
            className={styles.video}
          >
            <source
              src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.content}>
          <span>Tại sao nên chọn Stravel</span>
          <h3>Trải nghiệm bậc nhất</h3>
          <p>
            chúng tôi hợp tác với những địa điểm nghỉ dưỡng có trải nghiệm bậc
            nhất để đem lại một kỳ nghỉ tuyệt vời cho bạn cùng người thân
          </p>
          <a href="#" className={styles.btn}>
            Tìm hiểu thêm về Stravel
          </a>
        </div>
      </section>
      <section className={styles.services}>
        <div className={styles.heading}>
          <span>Dịch vụ</span>
          <h1>Nâng cao trải nghiệm</h1>
        </div>
        <div className={styles.ContainerBox}>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
            <h3>Rộng khắp thế giới</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faHiking} className={styles.icon} />
            <h3>Những cuộc phưu lưu</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faUtensils} className={styles.icon} />
            <h3>Dịch vụ ăn uống</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faHotel} className={styles.icon} />
            <h3>Nghỉ dưỡng cao cấp</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faWallet} className={styles.icon} />
            <h3>Giá tốt nhất</h3>
            <p>Some text....</p>
          </div>
          <div className={styles.box}>
            <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
            <h3>Hỗ trợ 247</h3>
            <p>Some text....</p>
          </div>
        </div>
      </section>
      <section className={styles.gallery}>
        <div className={styles.heading}>
          <span>
            <h2>Những bức ảnh về Hawai</h2>
          </span>
        </div>
        <div className={styles.boxContainer}>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1545251142-f32339076e6d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YWl8ZW58MHx8MHx8fDA%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1575488469369-3c02745002bb?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1483168527879-c66136b56105?q=80&w=3316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1593275410252-af94c54a72f6?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1550143140-a808693b609f?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1593993553781-a8a780ab1b27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGhhd2FpfGVufDB8fDB8fHww"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="https://images.unsplash.com/photo-1633511090690-0b7f2fec0e8d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={320}
              height={200}
              style={{ borderRadius: "4px" }}
              alt="hawai"
            />
            <div className={styles.title}>
              <span>Kailua</span>
              <h3 id="modal">Bờ biển KaiLua</h3>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.review}>
        <div className={styles.content}>
          <span>
            <h2>Những lời đánh giá tốt nhất</h2>
          </span>
          <p>
            Tất cả những lời đánh giá chúng tôi đều ghi nhận và tiếp thu để phát
            triển. đây là những đánh giá tốt nhất về chuyến đi Hawaii này.
          </p>
        </div>
        <div className={styles.box}>
          <p>
            Chuyến đi rất vui, giá rất rẻ. gọi tư vấn rất nhanh. tôi sẽ quay lại
            đay môt lần nữa
          </p>
          <div className={styles.users}>
            <Image
              src="https://images.unsplash.com/photo-1569124589354-615739ae007b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGh1bWFufGVufDB8fDB8fHww"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              alt="githubPage"
            />
            <div className={styles.info}>
              <h3>Guen fufun</h3>
              <span>Nội trợ</span>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <p>
            Chuyến đi rất vui, giá rất rẻ. gọi tư vấn rất nhanh. tôi sẽ quay lại
            đay môt lần nữa
          </p>
          <div className={styles.users}>
            <Image
              src="https://images.unsplash.com/photo-1613689284023-265a790729b8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              alt="githubPage"
            />
            <div className={styles.info}>
              <h3>Guen fufun</h3>
              <span>Nội trợ</span>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <p>
            Chuyến đi rất vui, giá rất rẻ. gọi tư vấn rất nhanh. tôi sẽ quay lại
            đay môt lần nữa
          </p>
          <div className={styles.users}>
            <Image
              src="https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGh1bWFufGVufDB8fDB8fHww"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              alt="githubPage"
            />
            <div className={styles.info}>
              <h3>Guen fufun</h3>
              <span>Nội trợ</span>
            </div>
          </div>
        </div>
        <div className={styles.box}>
          <p>
            Chuyến đi rất vui, giá rất rẻ. gọi tư vấn rất nhanh. tôi sẽ quay lại
            đay môt lần nữa
          </p>
          <div className={styles.users}>
            <Image
              src="https://images.unsplash.com/photo-1599256621730-535171e28e50?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGh1bWFufGVufDB8fDB8fHww"
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
              alt="githubPage"
            />
            <div className={styles.info}>
              <h3>Guen fufun</h3>
              <span>Nội trợ</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Order;
